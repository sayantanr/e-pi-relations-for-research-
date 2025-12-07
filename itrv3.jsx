import React, { useState } from 'react';

const ComputeNewRelations = () => {
  const [n, setN] = useState(500);
  const [results, setResults] = useState(null);
  const [computing, setComputing] = useState(false);

  const e = Math.E;
  const pi = Math.PI;

  const computeRelations = () => {
    setComputing(true);
    
    // Small delay to show computing state
    setTimeout(() => {
      // Relation 9: Exponential-Logarithmic Cascade
      const computeR9 = (terms) => {
        let sum = 0;
        for (let k = 1; k <= terms; k++) {
          sum += (Math.exp(-k) * Math.log(k * pi)) / Math.pow(k, 1.5);
        }
        return sum;
      };

      // Relation 10: Alternating Power Series Blend
      const computeR10 = (terms) => {
        let sum = 0;
        let factorial = 1;
        for (let k = 1; k <= terms; k++) {
          factorial *= k;
          sum += (Math.pow(-1, k) * (Math.pow(e, k) + Math.pow(pi, k))) / (factorial * k);
        }
        return sum;
      };

      // Relation 11: Trigonometric-Hyperbolic Quotient
      const computeR11 = () => {
        const numerator = Math.sin(e) * Math.sinh(pi) + Math.cos(e) * Math.cosh(pi);
        const denominator = Math.tan(pi/4) * Math.tanh(e/pi);
        return numerator / denominator;
      };

      // Relation 12: Weighted Reciprocal Product
      const computeR12 = (terms) => {
        let product = 1;
        for (let k = 2; k <= terms; k++) {
          product *= (1 - 1 / (Math.pow(k, e) + Math.pow(k, pi)));
        }
        return product;
      };

      const r9_500 = computeR9(500);
      const r9_1000 = computeR9(1000);
      
      const r10_500 = computeR10(500);
      const r10_1000 = computeR10(1000);
      
      const r11 = computeR11();
      
      const r12_500 = computeR12(500);
      const r12_1000 = computeR12(1000);

      setResults({
        r9: { n500: r9_500, n1000: r9_1000 },
        r10: { n500: r10_500, n1000: r10_1000 },
        r11: { value: r11 },
        r12: { n500: r12_500, n1000: r12_1000 }
      });
      
      setComputing(false);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Computing Relations 9-12
        </h1>
        <p className="text-gray-600 mb-8">
          Novel e-π relations with detailed computational results
        </p>

        {/* Formulas Display */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-indigo-700 mb-3">
              Relation 9: Exponential-Logarithmic Cascade
            </h3>
            <div className="bg-indigo-50 p-4 rounded border-2 border-indigo-200 mb-3">
              <code className="text-gray-800">
                R₉(n) = ∑(k=1 to n) [e^(-k) · ln(kπ)] / k^(3/2)
              </code>
            </div>
            <p className="text-gray-600 text-sm">
              Combines exponential decay with logarithmic growth, weighted by k^(-3/2)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              Relation 10: Alternating Power Series Blend
            </h3>
            <div className="bg-purple-50 p-4 rounded border-2 border-purple-200 mb-3">
              <code className="text-gray-800">
                R₁₀(n) = ∑(k=1 to n) [(-1)^k · (e^k + π^k)] / (k! · k)
              </code>
            </div>
            <p className="text-gray-600 text-sm">
              Alternating factorial series with mixed exponentials and additional k weighting
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-pink-700 mb-3">
              Relation 11: Trigonometric-Hyperbolic Quotient
            </h3>
            <div className="bg-pink-50 p-4 rounded border-2 border-pink-200 mb-3">
              <code className="text-gray-800">
                R₁₁ = [sin(e)·sinh(π) + cos(e)·cosh(π)] / [tan(π/4)·tanh(e/π)]
              </code>
            </div>
            <p className="text-gray-600 text-sm">
              Closed-form expression mixing circular and hyperbolic functions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-violet-700 mb-3">
              Relation 12: Weighted Reciprocal Product
            </h3>
            <div className="bg-violet-50 p-4 rounded border-2 border-violet-200 mb-3">
              <code className="text-gray-800">
                R₁₂(n) = ∏(k=2 to n) [1 - 1/(k^e + k^π)]
              </code>
            </div>
            <p className="text-gray-600 text-sm">
              Infinite product with reciprocal powers as exponential bases
            </p>
          </div>
        </div>

        {/* Compute Button */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <button
            onClick={computeRelations}
            disabled={computing}
            className={`w-full py-4 px-6 rounded-lg text-white font-bold text-lg transition-all ${
              computing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg'
            }`}
          >
            {computing ? 'Computing...' : 'Compute All Relations'}
          </button>
        </div>

        {/* Results Display */}
        {results && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Computational Results
            </h2>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-100 to-purple-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-800">Relation</th>
                    <th className="px-6 py-4 text-right font-bold text-gray-800">n = 500</th>
                    <th className="px-6 py-4 text-right font-bold text-gray-800">n = 1000</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-800">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-indigo-50">
                    <td className="px-6 py-4 font-semibold text-indigo-700">R₉</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r9.n500.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r9.n1000.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Series</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-purple-700">R₁₀</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r10.n500.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r10.n1000.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Series</td>
                  </tr>
                  <tr className="hover:bg-pink-50">
                    <td className="px-6 py-4 font-semibold text-pink-700">R₁₁</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800" colSpan="2">
                      {results.r11.value.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Closed</td>
                  </tr>
                  <tr className="hover:bg-violet-50">
                    <td className="px-6 py-4 font-semibold text-violet-700">R₁₂</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r12.n500.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-gray-800">
                      {results.r12.n1000.toFixed(10)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Product</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Copy-friendly format */}
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Copy-Friendly Results:
              </h3>
              <div className="space-y-2 font-mono text-sm text-gray-700">
                <div>Relation 9: n=500, {results.r9.n500.toFixed(10)}</div>
                <div>Relation 9: n=1000, {results.r9.n1000.toFixed(10)}</div>
                <div>Relation 10: n=500, {results.r10.n500.toFixed(10)}</div>
                <div>Relation 10: n=1000, {results.r10.n1000.toFixed(10)}</div>
                <div>Relation 11: {results.r11.value.toFixed(10)}</div>
                <div>Relation 12: n=500, {results.r12.n500.toFixed(10)}</div>
                <div>Relation 12: n=1000, {results.r12.n1000.toFixed(10)}</div>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Analysis</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>R₉ Convergence:</strong> Change from n=500 to n=1000: {' '}
                  {Math.abs(results.r9.n1000 - results.r9.n500).toExponential(4)}
                </p>
                <p>
                  <strong>R₁₀ Convergence:</strong> Change from n=500 to n=1000: {' '}
                  {Math.abs(results.r10.n1000 - results.r10.n500).toExponential(4)}
                </p>
                <p>
                  <strong>R₁₁:</strong> Direct evaluation (no convergence needed)
                </p>
                <p>
                  <strong>R₁₂ Convergence:</strong> Change from n=500 to n=1000: {' '}
                  {Math.abs(results.r12.n1000 - results.r12.n500).toExponential(4)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Constants Used */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Constants Used:</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-semibold">e:</span> {e.toFixed(15)}
            </div>
            <div>
              <span className="font-semibold">π:</span> {pi.toFixed(15)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputeNewRelations;
