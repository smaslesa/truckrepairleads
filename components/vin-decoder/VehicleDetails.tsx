'use client';

import { Car, Gauge, Palette, Package, Info, Fuel, Settings, MapPin } from 'lucide-react';

interface VehicleData {
  vin?: string;
  year?: number | string;
  make?: string;
  model?: string;
  trim?: string;
  msrp?: number | string;
  bodyStyle?: string;
  bodySubtype?: string;
  vehicleType?: string;
  vehicleClass?: string;
  doors?: number | string;
  stdSeating?: number | string;
  cabType?: string;
  bedLength?: string;
  engine?: string;
  engineSize?: number | string;
  cylinders?: number | string;
  horsepower?: number | string;
  torque?: string;
  drivetrain?: string;
  transmission?: string;
  transmissionSpeeds?: string;
  powertrainType?: string;
  turbo?: string;
  supercharger?: string;
  fuelType?: string;
  cityMpg?: number | string;
  highwayMpg?: number | string;
  fuelTankCapacity?: number | string;
  extColor?: string;
  intColor?: string;
  interiorMaterial?: string;
  roofType?: string;
  wheelSize?: string;
  wheelType?: string;
  overallHeight?: string;
  overallLength?: string;
  overallWidth?: string;
  wheelbase?: string;
  groundClearance?: string;
  curbWeight?: number | string;
  gvwr?: number | string;
  payloadCapacity?: number | string;
  towingCapacity?: number | string;
  safetyRating?: string;
  abs?: string;
  tractionControl?: string;
  stabilityControl?: string;
  airbags?: string;
  backupCamera?: string;
  blindSpotMonitor?: string;
  laneDepartureWarning?: string;
  adaptiveCruiseControl?: string;
  madeIn?: string;
  manufacturer?: string;
  plantLocation?: string;
  assemblyPlant?: string;
  modelYear?: string;
  productionDate?: string;
}

interface VehicleDetailsProps {
  data: VehicleData;
}

export default function VehicleDetails({ data }: VehicleDetailsProps) {
  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined || value === '') {
      return 'N/A';
    }
    return String(value);
  };

  // Calculate combined MPG if both city and highway are available
  const combinedMpg = data.cityMpg && data.highwayMpg 
    ? Math.round((Number(data.cityMpg) + Number(data.highwayMpg)) / 2)
    : null;

  const sections = [
    {
      title: 'Basic Information',
      icon: <Car className="w-5 h-5" />,
      priority: 1,
      fields: [
        { label: 'VIN', value: data.vin, highlight: true },
        { label: 'Year', value: data.year },
        { label: 'Make', value: data.make },
        { label: 'Model', value: data.model },
        { label: 'Trim Level', value: data.trim },
        { label: 'MSRP', value: data.msrp ? `$${Number(data.msrp).toLocaleString()}` : null },
      ]
    },
    {
      title: 'Body & Style',
      icon: <Package className="w-5 h-5" />,
      priority: 2,
      fields: [
        { label: 'Body Style', value: data.bodyStyle },
        { label: 'Body Subtype', value: data.bodySubtype },
        { label: 'Vehicle Type', value: data.vehicleType },
        { label: 'Vehicle Class', value: data.vehicleClass },
        { label: 'Number of Doors', value: data.doors ? `${data.doors} doors` : null },
        { label: 'Seating Capacity', value: data.stdSeating ? `${data.stdSeating} seats` : null },
        { label: 'Cab Type', value: data.cabType },
        { label: 'Bed Length', value: data.bedLength },
      ]
    },
    {
      title: 'Engine & Performance',
      icon: <Settings className="w-5 h-5" />,
      priority: 1,
      fields: [
        { label: 'Engine Description', value: data.engine },
        { label: 'Engine Displacement', value: data.engineSize ? `${data.engineSize}L` : null },
        { label: 'Number of Cylinders', value: data.cylinders ? `${data.cylinders} cylinders` : null },
        { label: 'Horsepower', value: data.horsepower ? `${data.horsepower} hp` : null },
        { label: 'Torque', value: data.torque },
        { label: 'Drivetrain', value: data.drivetrain },
        { label: 'Transmission Type', value: data.transmission },
        { label: 'Transmission Speeds', value: data.transmissionSpeeds },
        { label: 'Powertrain Type', value: data.powertrainType },
        { label: 'Turbo', value: data.turbo },
        { label: 'Supercharger', value: data.supercharger },
      ]
    },
    {
      title: 'Fuel & Efficiency',
      icon: <Fuel className="w-5 h-5" />,
      priority: 2,
      fields: [
        { label: 'Fuel Type', value: data.fuelType },
        { label: 'City MPG', value: data.cityMpg ? `${data.cityMpg} mpg` : null },
        { label: 'Highway MPG', value: data.highwayMpg ? `${data.highwayMpg} mpg` : null },
        { label: 'Combined MPG', value: combinedMpg ? `${combinedMpg} mpg` : null },
        { label: 'Fuel Tank Capacity', value: data.fuelTankCapacity ? `${data.fuelTankCapacity} gallons` : null },
        { label: 'Range (City)', value: data.cityMpg && data.fuelTankCapacity ? `${Math.round(Number(data.cityMpg) * Number(data.fuelTankCapacity))} miles` : null },
        { label: 'Range (Highway)', value: data.highwayMpg && data.fuelTankCapacity ? `${Math.round(Number(data.highwayMpg) * Number(data.fuelTankCapacity))} miles` : null },
      ]
    },
    {
      title: 'Colors & Appearance',
      icon: <Palette className="w-5 h-5" />,
      priority: 3,
      fields: [
        { label: 'Exterior Color', value: data.extColor },
        { label: 'Interior Color', value: data.intColor },
        { label: 'Interior Material', value: data.interiorMaterial },
        { label: 'Roof Type', value: data.roofType },
        { label: 'Wheel Size', value: data.wheelSize },
        { label: 'Wheel Type', value: data.wheelType },
      ]
    },
    {
      title: 'Dimensions & Weight',
      icon: <Gauge className="w-5 h-5" />,
      priority: 3,
      fields: [
        { label: 'Overall Height', value: data.overallHeight },
        { label: 'Overall Length', value: data.overallLength },
        { label: 'Overall Width', value: data.overallWidth },
        { label: 'Wheelbase', value: data.wheelbase },
        { label: 'Ground Clearance', value: data.groundClearance },
        { label: 'Curb Weight', value: data.curbWeight ? `${data.curbWeight} lbs` : null },
        { label: 'Gross Vehicle Weight', value: data.gvwr ? `${data.gvwr} lbs` : null },
        { label: 'Payload Capacity', value: data.payloadCapacity ? `${data.payloadCapacity} lbs` : null },
        { label: 'Towing Capacity', value: data.towingCapacity ? `${data.towingCapacity} lbs` : null },
      ]
    },
    {
      title: 'Safety & Features',
      icon: <Info className="w-5 h-5" />,
      priority: 2,
      fields: [
        { label: 'Safety Rating', value: data.safetyRating },
        { label: 'ABS', value: data.abs },
        { label: 'Traction Control', value: data.tractionControl },
        { label: 'Stability Control', value: data.stabilityControl },
        { label: 'Airbags', value: data.airbags },
        { label: 'Backup Camera', value: data.backupCamera },
        { label: 'Blind Spot Monitor', value: data.blindSpotMonitor },
        { label: 'Lane Departure Warning', value: data.laneDepartureWarning },
        { label: 'Adaptive Cruise Control', value: data.adaptiveCruiseControl },
      ]
    },
    {
      title: 'Manufacturing & Origin',
      icon: <MapPin className="w-5 h-5" />,
      priority: 3,
      fields: [
        { label: 'Country of Origin', value: data.madeIn },
        { label: 'Manufacturer', value: data.manufacturer },
        { label: 'Plant Location', value: data.plantLocation },
        { label: 'Assembly Plant', value: data.assemblyPlant },
        { label: 'Model Year', value: data.modelYear },
        { label: 'Production Date', value: data.productionDate },
      ]
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">Vehicle Details</h3>
        {data.year && data.make && data.model && (
          <p className="text-white/90 text-lg">
            {data.year} {data.make} {data.model} {data.trim || ''}
          </p>
        )}
      </div>

      <div className="p-6 space-y-6">
        {sections.map((section, index) => {
          // Filter out sections with no data
          const hasData = section.fields.some(field => field.value && field.value !== 'N/A');
          
          if (!hasData && section.title !== 'Basic Information') {
            return null;
          }

          return (
            <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-blue-600">{section.icon}</div>
                <h4 className="font-semibold text-gray-800">{section.title}</h4>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {section.fields.map((field, fieldIndex) => {
                  const value = formatValue(field.value);
                  const isHighlight = 'highlight' in field && field.highlight;
                  
                  if (value === 'N/A' && !isHighlight) {
                    return null;
                  }

                  return (
                    <div key={fieldIndex} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{field.label}:</span>
                      <span className={`text-sm ${
                        isHighlight 
                          ? 'font-mono font-semibold text-blue-600' 
                          : 'font-medium text-gray-800'
                      }`}>
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {!data.year && !data.make && !data.model && (
          <div className="text-center py-8">
            <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">Limited information available for this VIN</p>
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-4">
        <p className="text-xs text-gray-500 text-center">
          Data retrieved on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
