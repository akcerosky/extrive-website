import React, { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ContactSection from '@/components/ContactSection';

// Configurable reduction rates
const SICK_DAY_REDUCTION_RATE = 0.3; // 30%
const INJURY_REDUCTION_RATE = 0.4;   // 40%

type ROIResult = {
  annualSavings: number;
  roiPercent: number;
  paybackMonths: number;
  workersBenefited: number;
};

const defaultInputs = {
  numWorkers: 50,
  avgSalary: 25000,
  avgSickDays: 8,
  costPerSickDay: 1200,
  injuryRate: 0.08,
  costPerInjury: 20000,
  productivityGainPercent: 0.12,
  exoCostPerWorker: 12000,
  maintenancePerWorker: 1000, // New field
};

function validateInputs(inputs: typeof defaultInputs): string | null {
  if (inputs.numWorkers < 1 || inputs.numWorkers > 1000) return "Number of workers must be between 1 and 1000.";
  if (inputs.avgSalary < 5000 || inputs.avgSalary > 100000) return "Average salary must be between ₹5,000 and ₹100,000.";
  if (inputs.avgSickDays < 0 || inputs.avgSickDays > 30) return "Average sick days must be between 0 and 30.";
  if (inputs.costPerSickDay < 500 || inputs.costPerSickDay > 10000) return "Cost per sick day must be between ₹500 and ₹10,000.";
  if (inputs.injuryRate < 0 || inputs.injuryRate > 1) return "Injury rate must be between 0 and 1.";
  if (inputs.costPerInjury < 1000 || inputs.costPerInjury > 100000) return "Cost per injury must be between ₹1,000 and ₹100,000.";
  if (inputs.productivityGainPercent < 0 || inputs.productivityGainPercent > 0.5) return "Productivity gain must be between 0 and 0.5 (50%).";
  if (inputs.exoCostPerWorker < 5000 || inputs.exoCostPerWorker > 50000) return "Exosuit cost per worker must be between ₹5,000 and ₹50,000.";
  if (inputs.maintenancePerWorker < 0 || inputs.maintenancePerWorker > 10000) return "Maintenance cost per worker must be between ₹0 and ₹10,000.";
  if (inputs.exoCostPerWorker > inputs.avgSalary * 12) return "Exosuit cost per worker should not exceed annual salary.";
  return null;
}

function calculateROI(inputs: typeof defaultInputs): ROIResult {
  // Potential savings from reduced sick days (configurable reduction)
  const reducedSickDays = inputs.avgSickDays * SICK_DAY_REDUCTION_RATE * inputs.numWorkers;
  const sickDaySavings = reducedSickDays * inputs.costPerSickDay;

  // Potential savings from reduced injuries (configurable reduction)
  const injuriesAvoided = inputs.injuryRate * inputs.numWorkers * INJURY_REDUCTION_RATE;
  const injurySavings = injuriesAvoided * inputs.costPerInjury;

  // Productivity gain (assume % gain in salary value)
  const productivitySavings =
    inputs.numWorkers *
    inputs.avgSalary *
    12 *
    inputs.productivityGainPercent;

  // Subtract annual maintenance cost
  const totalMaintenance = inputs.maintenancePerWorker * inputs.numWorkers;

  // Total annual savings
  const annualSavings = sickDaySavings + injurySavings + productivitySavings - totalMaintenance;

  // Total investment
  const totalInvestment = inputs.numWorkers * inputs.exoCostPerWorker;

  // ROI percent
  const roiPercent =
    totalInvestment > 0 ? (annualSavings / totalInvestment) * 100 : 0;

  // Payback period in months
  const paybackMonths =
    annualSavings > 0 ? (totalInvestment / annualSavings) * 12 : 0;

  return {
    annualSavings: Math.round(annualSavings),
    roiPercent: Math.round(roiPercent),
    paybackMonths: Math.round(paybackMonths * 10) / 10,
    workersBenefited: inputs.numWorkers,
  };
}

const ROICalculatorPage: React.FC = () => {
  const [inputs, setInputs] = useState(defaultInputs);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
    setShowResults(false);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateInputs(inputs);
    if (validationError) {
      setError(validationError);
      setShowResults(false);
      return;
    }
    setShowResults(true);
    setError(null);
  };

  const results = calculateROI(inputs);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-8 leading-tight tracking-tight">
              Calculate Your <span className="text-orange-500">ROI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how much you can save and boost productivity by adopting our exosuit technology.
            </p>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-black flex items-center justify-center">
                  <Calculator className="mr-3 h-8 w-8 text-orange-500" />
                  Interactive ROI Calculator
                </CardTitle>
                <p className="text-gray-600 mt-4">
                  Enter your workplace details to see potential savings and productivity gains
                </p>
              </CardHeader>
              <CardContent>
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 rounded-2xl p-8"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Number of Workers
                      </label>
                      <input
                        type="number"
                        name="numWorkers"
                        min={1}
                        max={1000}
                        value={inputs.numWorkers}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Average Monthly Salary (₹)
                      </label>
                      <input
                        type="number"
                        name="avgSalary"
                        min={5000}
                        max={100000}
                        value={inputs.avgSalary}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Average Sick Days per Worker/Year
                      </label>
                      <input
                        type="number"
                        name="avgSickDays"
                        min={0}
                        max={30}
                        value={inputs.avgSickDays}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Cost per Sick Day (₹)
                      </label>
                      <input
                        type="number"
                        name="costPerSickDay"
                        min={500}
                        max={10000}
                        value={inputs.costPerSickDay}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Annual Injury Rate (per worker)
                      </label>
                      <input
                        type="number"
                        name="injuryRate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={inputs.injuryRate}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                      <span className="text-xs text-gray-500">
                        (e.g., 0.08 = 8% of workers injured per year)
                      </span>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Cost per Injury (₹)
                      </label>
                      <input
                        type="number"
                        name="costPerInjury"
                        min={1000}
                        max={100000}
                        value={inputs.costPerInjury}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Productivity Gain (%) 
                      </label>
                      <input
                        type="number"
                        name="productivityGainPercent"
                        min={0}
                        max={0.5}
                        step={0.01}
                        value={inputs.productivityGainPercent}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                      <span className="text-xs text-gray-500">
                        (e.g., 0.12 = 12% gain)
                      </span>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Exosuit Cost per Worker (₹)
                      </label>
                      <input
                        type="number"
                        name="exoCostPerWorker"
                        min={5000}
                        max={50000}
                        value={inputs.exoCostPerWorker}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Annual Maintenance Cost per Worker (₹)
                      </label>
                      <input
                        type="number"
                        name="maintenancePerWorker"
                        min={0}
                        max={10000}
                        value={inputs.maintenancePerWorker}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 text-lg"
                        required
                      />
                      <span className="text-xs text-gray-500">
                        (e.g., annual service, repairs, etc.)
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col items-center mt-6">
                    {error && (
                      <div className="mb-4 flex items-center text-red-600 bg-red-50 px-4 py-2 rounded">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        <span>{error}</span>
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="bg-orange-500 text-white px-8 py-3 text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                    >
                      Calculate ROI
                    </Button>
                  </div>
                </form>
                {showResults && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-center mb-8 text-black">
                      Your ROI Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card className="text-center shadow hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <CardContent className="p-8">
                          <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                          <div className="text-4xl font-bold text-black mb-2">
                            ₹{results.annualSavings.toLocaleString()}
                          </div>
                          <p className="text-gray-600 font-medium">Annual Savings</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Reduced sick days, injuries & productivity gains (after maintenance)
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center shadow hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <CardContent className="p-8">
                          <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                          <div className="text-4xl font-bold text-black mb-2">
                            {results.roiPercent}%
                          </div>
                          <p className="text-gray-600 font-medium">ROI (Year 1)</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Based on your inputs
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center shadow hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <CardContent className="p-8">
                          <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                          <div className="text-4xl font-bold text-black mb-2">
                            {results.paybackMonths} mo
                          </div>
                          <p className="text-gray-600 font-medium">Payback Period</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Time to recover investment
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="text-center mt-8 text-gray-500 text-sm">
                      <span>
                        <span className="font-semibold">Note:</span> These are estimates based on your inputs and typical BackEX pilot results.
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <ContactSection />
    </div>
  );
};

export default ROICalculatorPage;