"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const CreditRequestPage = () => {
  const spendingChartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (spendingChartRef.current) {
      const spendingChartCtx = spendingChartRef.current.getContext('2d');
      if (spendingChartCtx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const spendingData = {
          labels: ['Vertex AI', 'Gemini API'],
          datasets: [{
            label: 'Cost in R$',
            data: [179.20, 94.82],
            backgroundColor: [
              '#00A6ED',
              '#84D44A',
            ],
            borderColor: '#f8fafc',
            borderWidth: 4,
            hoverOffset: 8
          }]
        };

        const spendingConfig = {
          type: 'doughnut' as const,
          data: spendingData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: {
                position: 'bottom' as const,
                labels: {
                  padding: 20,
                  font: {
                    size: 14,
                    family: 'Inter'
                  }
                }
              },
              title: {
                display: false
              },
              tooltip: {
                callbacks: {
                  title: function(tooltipItems: any) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                      return label.join(' ');
                    } else {
                      return label;
                    }
                  },
                  label: function(context: any) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed !== null) {
                      label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(context.parsed);
                    }
                    return label;
                  }
                }
              }
            }
          }
        };
        
        chartInstance.current = new Chart(spendingChartCtx, spendingConfig);
      }
    }

    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('border-blue-400'));
        card.addEventListener('mouseleave', () => card.classList.remove('border-blue-400'));
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>SFAI Solutions - Google Cloud Credit Request</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
        }
        .chart-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          height: 400px;
          max-height: 400px;
        }
      `}</style>
      <main className="container mx-auto p-4 md:p-8 text-gray-800">
        
        <header className="text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Google Cloud Credit Request</h1>
            <p className="mt-4 text-xl text-blue-600 font-semibold">SFAI Solutions</p>
            <p className="mt-2 max-w-2xl mx-auto text-gray-600">An infographic about our journey, our vision for the Cocreator product, and how Google Cloud credits are essential to transform our prototype into a scalable solution.</p>
        </header>

        <section id="company-overview" className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">SFAI Solutions Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 text-wrap">R$200/month</p>
                    <p className="mt-2 text-gray-700">Investment Budget</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">Pre-Seed</p>
                    <p className="mt-2 text-gray-700">Current Stage</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">100%</p>
                    <p className="mt-2 text-gray-700">Focus on AI with Google</p>
                </div>
            </div>
            <p className="text-center mt-6 text-gray-600">We are an early-stage company, operating on a limited budget, financed by family investment, with an ambitious vision to revolutionize content creation.</p>
        </section>

        <section id="cocreator-vision" className="mb-16">
            <div className="text-center">
                 <h2 className="text-3xl font-bold mb-2">Our Vision: The Cocreator</h2>
                 <p className="max-w-3xl mx-auto text-gray-600">Empowering content creators, marketers, and educators to transform any topic or URL into an engaging, shareable video instantly. Cocreator is a micro-SaaS platform that automates the entire content creation pipeline.</p>
            </div>
        </section>

        <section id="ai-engine" className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-8">How It Works: Our Multi-Agent AI Engine</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="agent-card text-center p-4 border-2 border-gray-200 rounded-lg w-full md:w-48 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="text-2xl">📝</p>
                    <h3 className="font-bold">Planning Agent</h3>
                    <p className="text-sm text-gray-500">Researches the topic and creates an outline.</p>
                </div>
                <div className="text-2xl text-blue-500 font-bold hidden md:block">&rarr;</div>
                 <div className="text-2xl text-blue-500 font-bold md:hidden">&darr;</div>
                <div className="agent-card text-center p-4 border-2 border-gray-200 rounded-lg w-full md:w-48 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="text-2xl">✍️</p>
                    <h3 className="font-bold">Writer Agent</h3>
                    <p className="text-sm text-gray-500">Writes the full script from the outline.</p>
                </div>
                 <div className="text-2xl text-blue-500 font-bold hidden md:block">&rarr;</div>
                 <div className="text-2xl text-blue-500 font-bold md:hidden">&darr;</div>
                <div className="agent-card text-center p-4 border-2 border-gray-200 rounded-lg w-full md:w-48 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="text-2xl">🎨🗣️</p>
                    <h3 className="font-bold">Multimedia Agent</h3>
                    <p className="text-sm text-gray-500">Generates synchronized images and narrations.</p>
                </div>
                 <div className="text-2xl text-blue-500 font-bold hidden md:block">&rarr;</div>
                 <div className="text-2xl text-blue-500 font-bold md:hidden">&darr;</div>
                <div className="agent-card text-center p-4 border-2 border-gray-200 rounded-lg w-full md:w-48 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                     <p className="text-2xl">🎬</p>
                    <h3 className="font-bold">Video Agent</h3>
                    <p className="text-sm text-gray-500">Assembles all assets into a final video.</p>
                </div>
            </div>
             <p className="text-center mt-6 text-gray-600">The core of our application is a sophisticated system built with the <strong>Google Agent Development Kit (ADK)</strong> and <strong>Gemini</strong> models, currently in a functional prototype state.</p>
        </section>


        <section id="billing-analysis" className="mb-16">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h2 className="text-3xl font-bold mb-4">The Bottleneck: Our Commitment to Google Cloud</h2>
                    <p className="text-gray-600 mb-4">We are at a critical juncture. Our local prototype has proven the concept, but scaling to the cloud is essential. Our spending so far demonstrates our deep investment in Google's AI ecosystem.</p>
                    <p className="text-gray-600">The vast majority of our expenses have been with the technologies that are the heart of Cocreator. This chart visualizes our total spending of <strong>R$274.02</strong>, highlighting our dependence and commitment to Vertex AI and the Gemini API.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-bold text-center mb-4">AI Cost Analysis</h3>
                    <div className="chart-container">
                        <canvas ref={spendingChartRef}></canvas>
                    </div>
                </div>
            </div>
        </section>

        <section id="credits-usage" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">The Way Forward: How Credits Will Be Used</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">Google Cloud credits are not just financial relief; they are the catalyst that will allow us to take the crucial next steps.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-4xl mb-4">💻</p>
                    <h3 className="text-xl font-bold mb-2">Finalize Development</h3>
                    <p className="text-gray-600">Execute the computationally intensive tasks of multimedia and video agents, which require cloud processing power for rendering.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-4xl mb-4">🚀</p>
                    <h3 className="text-xl font-bold mb-2">Deploy and Scale</h3>
                    <p className="text-gray-600">Move our frontend and backend to <strong>Google Cloud Run</strong>, ensuring a serverless, scalable, and reliable infrastructure for our users.</p>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-4xl mb-4">💡</p>
                    <h3 className="font-bold">Develop Future Solutions</h3>
                    <p className="text-gray-600">Utilize <strong>Vertex AI</strong> to create custom coding solutions for clients, opening new revenue streams and innovation.</p>
                </div>
            </div>
        </section>

        <footer className="text-center py-10 border-t">
            <h2 className="text-2xl font-bold">A Partnership for the Future</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-2">A small help, a small boost from Google at this moment could mean a big leap forward and a significant impact in the future.</p>
            <p className="max-w-3xl mx-auto text-gray-600 mt-2">We are confident that, with the support of Google Cloud credits, we can successfully launch Cocreator and build a lasting and successful partnership with Google.</p>
        </footer>

      </main>
    </>
  );
};

export default CreditRequestPage;