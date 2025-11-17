'use client'

import React, { useState } from 'react'
import { Car, Calculator, Clock } from 'lucide-react'

const QuickEstimator = () => {
  const [repairType, setRepairType] = useState('')
  const [severity, setSeverity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [estimate, setEstimate] = useState<{
    minPrice: number
    maxPrice: number
    minTime: number
    maxTime: number
    avgPrice: number
  } | null>(null)

  const repairTypes = {
    bumper: 'Bumper Repair',
    dent: 'Dent Repair',
    paint: 'Paint Work',
    glass: 'Glass Replacement',
    truck breakdown: 'Truck Repair'
  }

  const severityLevels = {
    minor: 'Minor',
    moderate: 'Moderate', 
    major: 'Major'
  }

  const vehicleTypes = {
    economy: 'Economy Car',
    midsize: 'Mid-size Car',
    luxury: 'Luxury Car',
    suv: 'SUV/Truck'
  }

  const estimateData = {
    bumper: {
      minor: { economy: [200, 400], midsize: [250, 500], luxury: [400, 700], suv: [300, 600] },
      moderate: { economy: [400, 700], midsize: [500, 800], luxury: [700, 1200], suv: [600, 1000] },
      major: { economy: [800, 1500], midsize: [1000, 1800], luxury: [1500, 2500], suv: [1200, 2000] }
    },
    dent: {
      minor: { economy: [100, 300], midsize: [150, 350], luxury: [200, 500], suv: [180, 400] },
      moderate: { economy: [300, 600], midsize: [350, 700], luxury: [500, 900], suv: [400, 800] },
      major: { economy: [600, 1200], midsize: [700, 1400], luxury: [900, 1800], suv: [800, 1500] }
    },
    paint: {
      minor: { economy: [150, 400], midsize: [200, 500], luxury: [300, 700], suv: [250, 600] },
      moderate: { economy: [500, 1000], midsize: [600, 1200], luxury: [800, 1600], suv: [700, 1400] },
      major: { economy: [1500, 3000], midsize: [2000, 4000], luxury: [3000, 6000], suv: [2500, 5000] }
    },
    glass: {
      minor: { economy: [200, 400], midsize: [250, 500], luxury: [400, 800], suv: [300, 600] },
      moderate: { economy: [300, 600], midsize: [400, 700], luxury: [600, 1000], suv: [500, 900] },
      major: { economy: [500, 1000], midsize: [600, 1200], luxury: [800, 1600], suv: [700, 1400] }
    },
    truck breakdown: {
      minor: { economy: [1000, 3000], midsize: [1500, 4000], luxury: [2500, 6000], suv: [2000, 5000] },
      moderate: { economy: [3000, 8000], midsize: [4000, 10000], luxury: [6000, 15000], suv: [5000, 12000] },
      major: { economy: [8000, 20000], midsize: [10000, 25000], luxury: [15000, 40000], suv: [12000, 30000] }
    }
  }

  const timeEstimates = {
    bumper: { minor: [1, 2], moderate: [2, 3], major: [3, 5] },
    dent: { minor: [0.5, 1], moderate: [1, 2], major: [2, 4] },
    paint: { minor: [1, 2], moderate: [2, 4], major: [5, 10] },
    glass: { minor: [1, 1], moderate: [1, 2], major: [2, 3] },
    truck breakdown: { minor: [3, 7], moderate: [7, 14], major: [14, 30] }
  }

  const calculateEstimate = () => {
    if (!repairType || !severity || !vehicleType) return

    const priceRange = estimateData[repairType as keyof typeof estimateData]?.[severity as keyof typeof severityLevels]?.[vehicleType as keyof typeof vehicleTypes]
    const timeRange = timeEstimates[repairType as keyof typeof timeEstimates]?.[severity as keyof typeof severityLevels]

    if (!priceRange || !timeRange) return

    setEstimate({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minTime: timeRange[0],
      maxTime: timeRange[1],
      avgPrice: Math.round((priceRange[0] + priceRange[1]) / 2)
    })
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Quick Repair Estimator</h2>
        </div>
        <p className="text-gray-600 mt-2">Get instant estimates for common repairs</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type of Repair
              </label>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(repairTypes).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setRepairType(key)}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      repairType === key
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Damage Severity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(severityLevels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSeverity(key)}
                    className={`p-3 text-center rounded-lg border transition-all ${
                      severity === key
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(vehicleTypes).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setVehicleType(key)}
                    className={`p-3 text-center rounded-lg border transition-all ${
                      vehicleType === key
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculateEstimate}
              disabled={!repairType || !severity || !vehicleType}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Get Estimate
            </button>
          </div>

          {estimate && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Your Estimate</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center p-4 bg-green-100 rounded-lg border border-green-200">
                  <div className="text-sm text-green-700 mb-1">Estimated Cost</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${estimate.minPrice.toLocaleString()} - ${estimate.maxPrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Average: ${estimate.avgPrice.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Repair Time</span>
                  </div>
                  <span className="font-semibold text-blue-600">
                    {estimate.minTime === estimate.maxTime 
                      ? `${estimate.minTime} day${estimate.minTime > 1 ? 's' : ''}`
                      : `${estimate.minTime}-${estimate.maxTime} days`
                    }
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">What's Included:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Labor and parts</li>
                    <li>• Paint and materials</li>
                    <li>• Quality guarantee</li>
                    <li>• Clean up and detail</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Additional Services:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rental car/day:</span>
                      <span className="font-medium">$35-60</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paint protection:</span>
                      <span className="font-medium">$150-300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Extended warranty:</span>
                      <span className="font-medium">$100-200</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Note:</strong> Final estimate may vary based on hidden damage and specific vehicle requirements.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuickEstimator
