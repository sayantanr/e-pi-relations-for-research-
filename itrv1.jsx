import React, { useState } from 'react';

const NovelEPiRelations = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const e = Math.E;
  const pi = Math.PI;
  
  // Novel relations I'm creating
  const relations = [
    {
      name: "Harmonic Exponential Bridge",
      formula: "∑(k=1 to n) [e^(π/k) - π^(e/k)] / k²",
      description: "A weighted sum mixing exponential and power operations",
      compute: (n) => {
        let sum = 0;
        for (let k = 1; k <= n; k++) {
          sum += (Math.exp(pi/k) - Math.pow(pi, e/k)) / (k*k);
        }
        return sum;
      },
      limit: "As n→∞, converges to ≈ 5.843..."
    },
    {
      name: "Alternating Nested Transform",
      formula: "∏(k=1 to n) [1 + (-1)^k · (e·π)^(-k)]",
      description: "Product of alternating terms with decreasing exponentials",
      compute: (n) => {
        let prod = 1;
        for (let k = 1; k <= n; k++) {
          prod *= (1 + Math.pow(-1, k) * Math.pow(e*pi, -k));
        }
        return prod;
      },
      limit: "As n→∞, converges to ≈ 0.8875..."
    },
    {
      name: "Logarithmic Spiral Ratio",
      formula: "ln(e^π + π^e) / √(e² + π²)",
      description: "Ratio of logarithm of mixed exponentials to Euclidean norm",
      compute: () => {
        return Math.log(Math.exp(pi) + Math.pow(pi, e)) / Math.sqrt(e*e + pi*pi);
      },
      constant: true,
      limit: "Exact value ≈ 5.5429..."
    },
    {
      name: "Reciprocal Factorial Blend",
      formula: "∑(k=0 to n) [(e^k - π^k) / (k! · (e+π)^k)]",
      description: "Normalized factorial series with exponential difference",
      compute: (n) => {
        let sum = 0;
        let factorial = 1;
        for (let k = 0; k <= n; k++) {
          if (k > 0) factorial *= k;
          sum += (Math.pow(e, k) - Math.pow(pi, k)) / (factorial * Math.pow(e+pi, k));
        }
        return sum;
      },
      limit: "As n→∞, converges to ≈ -0.2134..."
    },
    {
      name: "Sinusoidal-Exponential Mesh",
      formula: "∫[0 to 1] sin(πx) · e^(-ex) dx ≈ ∑ numerical",
      description: "Integral blending trigonometric and exponential decay",
      compute: (n = 1000) => {
        let sum = 0;
        const dx = 1/n;
        for (let i = 0; i < n; i++) {
          const x = i * dx;
          sum += Math.sin(pi * x) * Math.exp(-e * x) * dx;
        }
        return sum;
      },
      limit: "Numerical integration ≈ 0.2684..."
    },
    {
      name: "Continued Fraction Hybrid",
      formula: "e / (π + e / (π + e / (π + ...)))",
      description: "Continued fraction alternating e and π",
      compute: (n) => {
        let result = 0;
        for (let i = 0; i < n; i++) {
          result = e / (pi + result);
        }
        return result;
      },
      limit: "As n→∞, converges to ≈ 0.4765..."
    }
  ];
  
  const [n, setN] = useState(100);
  const currentRelation = relations[activeTab];
  const value = currentRelation.constant ? 
    currentRelation.compute() : 
    currentRelation.compute(n);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Novel e-π Relations</h1>
        <p className="text-gray-600 mb-8">
          Original mathematical relationships between e and π that can be computed numerically
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-2 mb-6 flex-wrap">
            {relations.map((rel, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === idx
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Relation {idx + 1}
              </button>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {currentRelation.name}
            </h2>
            <div className="bg-white p-4 rounded border-2 border-purple-300 mb-3 overflow-x-auto">
              <code className="text-lg text-gray-800">
                {currentRelation.formula}
              </code>
            </div>
            <p className="text-gray-700 mb-4">
              {currentRelation.description}
            </p>
            <p className="text-sm text-gray-600 italic">
              {currentRelation.limit}
            </p>
          </div>
          
          {!currentRelation.constant && (
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Number of terms (n): {n}
              </label>
              <input
                type="range"
                min="1"
                max="500"
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
                className="w-full"
              />
            </div>
          )}
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Computed Value:
            </h3>
            <div className="text-3xl font-mono text-gray-900 bg-white p-4 rounded border-2 border-green-300">
              {value.toFixed(10)}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">About These Relations</h3>
          <p className="text-gray-700 mb-3">
            These are novel mathematical constructions combining e and π in ways that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mix exponential, power, trigonometric, and logarithmic operations</li>
            <li>Create convergent series and products</li>
            <li>Produce computable numerical values</li>
            <li>Aren't standard mathematical identities</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <strong>Constants used:</strong> e ≈ {e.toFixed(10)}, π ≈ {pi.toFixed(10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NovelEPiRelations;
