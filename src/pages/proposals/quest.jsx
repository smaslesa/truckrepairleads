import React from 'react';

const QuestProposal = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;900&display=swap');
        
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
        }
        
        @media screen {
          .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
            transition: all 0.3s ease;
          }
          .print-button:hover {
            background: #dc2626;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
          }
        }
        
        .icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
          border: 2px solid #ef4444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          color: #ef4444;
          font-size: 18px;
          font-weight: 600;
        }
      `}</style>

      {/* Print Button */}
      <button className="print-button no-print" onClick={handlePrint}>
        📄 Print Proposal
      </button>

      <div style={{fontFamily: "'Inter', -apple-system, sans-serif", color: '#1a1a1a', background: 'white'}}>
        
        {/* Cover Page */}
        <div className="page-break" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          color: 'white',
          position: 'relative'
        }}>
          <div>
            <div style={{fontSize: '28px', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '40px'}}>
              <span>BODYSHOP</span>
              <span style={{color: '#ef4444', marginLeft: '8px'}}>LEADS</span>
            </div>
            
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '30px',
              display: 'inline-block'
            }}>
              Digital Marketing Proposal
            </div>
            
            <h1 style={{fontSize: '64px', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px'}}>
              SEO & PPC<br/>MANAGEMENT
            </h1>
            
            <p style={{fontSize: '24px', fontWeight: 200, color: 'rgba(255,255,255,0.7)', marginBottom: '40px'}}>
              Dominate Local Search & Drive Quality Traffic
            </p>
            
            <div style={{margin: '40px 0'}}>
              <img 
                src="https://res.cloudinary.com/ddyiobiae/image/upload/v1756412698/QAC-Logo-White-yellow_u5v6ht.png"
                alt="Quest Auto Center"
                style={{maxWidth: '300px', height: 'auto'}}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 40px'}}>
          
          {/* Executive Summary */}
          <section style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>Executive Summary</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>Your Current Digital Opportunity</p>
            </div>
            
            <div style={{background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '30px'}}>
              <p style={{fontSize: '18px', lineHeight: 1.8, marginBottom: '20px'}}>
                Quest Auto Center has built an impressive brand and premium facility in Glassell Park, with a website that showcases your elite services beautifully. However, even the best website needs strategic SEO optimization to reach customers actively searching for truck repair, detailing, and truck repair services in Glendale, Burbank, and Los Angeles.
              </p>
              <p style={{fontSize: '16px'}}>
                <strong>The Opportunity:</strong> With targeted SEO enhancements and strategic PPC campaigns, Quest Auto Center can capture <span style={{color: '#ef4444', fontWeight: 600}}>40-60 new customer inquiries per month</span> and become the dominant choice in Northeast LA.
              </p>
            </div>
          </section>

          {/* SEO Analysis */}
          <section className="page-break" style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>SEO Optimization Opportunities</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>Quick Wins to Boost Your Visibility</p>
            </div>

            {[
              {
                title: 'Page Titles Need Strategic Keywords', 
                desc: 'Your current homepage title "Welcome to Quest Auto Center" is clean and professional, but adding strategic keywords will help Google understand your services and location better.',
                recommendation: '"Quest Auto Center | Elite Truck Repair & Truck Repair in Glendale, Burbank & Los Angeles"'
              },
              {
                title: 'Missing Local SEO Optimization', 
                desc: 'No location-specific content or service area pages. You\'re invisible for searches like "auto truck repair shop near me" or "truck repair Glassell Park".',
                recommendation: 'Create dedicated location pages and optimize Google Business Profile'
              },
              {
                title: 'No Service-Specific Landing Pages', 
                desc: 'All services mentioned on one page. Missing opportunities to rank for "paint correction," "ceramic coating," "frame repair," etc.',
                recommendation: 'Individual optimized pages for each core service'
              },
              {
                title: 'Unoptimized Meta Descriptions', 
                desc: 'Generic or missing meta descriptions that don\'t compel clicks from search results.',
                recommendation: 'Compelling descriptions with calls-to-action and trust signals'
              }
            ].map((issue, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '20px',
                padding: '20px',
                background: 'white',
                borderLeft: '4px solid #ef4444',
                borderRadius: '8px'
              }}>
                <div className="icon">{index + 1}</div>
                <div style={{flex: 1}}>
                  <h3 style={{fontWeight: 600, marginBottom: '8px'}}>{issue.title}</h3>
                  <p style={{color: '#666', marginBottom: '12px'}}>{issue.desc}</p>
                  <div style={{background: '#f0f9ff', padding: '10px 15px', borderRadius: '6px', fontSize: '14px', color: '#0369a1'}}>
                    <strong>Enhancement:</strong> {issue.recommendation}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Geo-Targeting Section */}
          <section className="page-break" style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>Strategic Geo-Targeting</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>Your 15-Mile Golden Zone</p>
            </div>

            <div style={{background: '#f9f9f9', borderRadius: '12px', padding: '30px', marginBottom: '30px'}}>
              <h3 style={{textAlign: 'center', marginBottom: '30px'}}>Primary Target Zones</h3>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '80px', height: '80px', background: '#ef4444', borderRadius: '50%',
                    margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '24px', fontWeight: 700
                  }}>A</div>
                  <h4 style={{fontWeight: 600, marginBottom: '8px'}}>Zone A: 0-3 Miles</h4>
                  <p style={{fontSize: '14px', color: '#666'}}>
                    <strong>Highest Priority</strong><br/>
                    Glendale (Primary), Glassell Park, Atwater Village
                  </p>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '80px', height: '80px', background: '#f97316', borderRadius: '50%',
                    margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '24px', fontWeight: 700
                  }}>B</div>
                  <h4 style={{fontWeight: 600, marginBottom: '8px'}}>Zone B: 3-7 Miles</h4>
                  <p style={{fontSize: '14px', color: '#666'}}>
                    <strong>Core Market</strong><br/>
                    Burbank, Pasadena, Los Feliz, Silver Lake
                  </p>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '80px', height: '80px', background: '#fbbf24', borderRadius: '50%',
                    margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '24px', fontWeight: 700
                  }}>C</div>
                  <h4 style={{fontWeight: 600, marginBottom: '8px'}}>Zone C: 7-12 Miles</h4>
                  <p style={{fontSize: '14px', color: '#666'}}>
                    <strong>Extended Reach</strong><br/>
                    Downtown LA, Hollywood, Studio City, North Hollywood
                  </p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div style={{margin: '30px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
              <img 
                src="https://res.cloudinary.com/ddyiobiae/image/upload/v1756413027/Screenshot_2025-08-28_at_1.30.23_PM_qtj9dm.png"
                alt="Quest Auto Center Service Area Map"
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>
            
            <div style={{background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '30px'}}>
              <h3 style={{marginBottom: '20px'}}>Competitive Landscape</h3>
              <ul style={{paddingLeft: '20px', lineHeight: 2.5}}>
                <li style={{marginBottom: '10px'}}>
                  <strong>Glendale Collision Center</strong> - 4690 San Fernando Rd (1.5 miles)<br/>
                  <span style={{fontSize: '14px', color: '#666'}}>
                    Website: <a href="https://glendalecollision.com" style={{color: '#0369a1'}}>glendalecollision.com</a> | Eco-friendly positioning, solar-powered
                  </span>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <strong>Glendale Truck Repair</strong> - Central Glendale (3 miles)<br/>
                  <span style={{fontSize: '14px', color: '#666'}}>
                    Website: <a href="https://glendaleab.com" style={{color: '#0369a1'}}>glendaleab.com</a> | Family-owned since 1966, VW certified
                  </span>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <strong>CARSTAR Glendale</strong> - Multiple locations<br/>
                  <span style={{fontSize: '14px', color: '#666'}}>
                    Website: <a href="https://carstar.com" style={{color: '#0369a1'}}>carstar.com</a> | National franchise, 24/7 accident assistance
                  </span>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <strong>Glen Oaks Collision Center</strong> - 2 LA locations<br/>
                  <span style={{fontSize: '14px', color: '#666'}}>
                    Website: <a href="https://glenoakscollisioncenter.com" style={{color: '#0369a1'}}>glenoakscollisioncenter.com</a> | Claims "#1 in LA"
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* PPC Ad Sample */}
          <section className="page-break" style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>Your Ads in Action</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>How Quest Will Dominate Search Results</p>
            </div>

            {/* Google Search Mock-up */}
            <div style={{background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', fontFamily: 'arial, sans-serif'}}>
              {/* Search Bar */}
              <div style={{display: 'flex', alignItems: 'center', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '10px 20px', marginBottom: '20px'}}>
                <span style={{marginRight: '10px', color: '#9aa0a6'}}>🔍</span>
                <span style={{color: '#000', fontSize: '16px'}}>truck repair glendale</span>
              </div>
              
              {/* Ad Label */}
              <div style={{marginBottom: '5px'}}>
                <span style={{background: '#000', color: 'white', padding: '2px 5px', borderRadius: '3px', fontSize: '11px', fontWeight: 500}}>Sponsored</span>
              </div>
              
              {/* The Ad */}
              <div style={{marginBottom: '30px'}}>
                <div style={{marginBottom: '8px'}}>
                  <span style={{color: '#1a0dab', fontSize: '20px', lineHeight: '26px'}}>
                    Where Luxury Meets Performance - Quest Auto Center
                  </span>
                </div>
                <div style={{marginBottom: '8px'}}>
                  <span style={{color: '#006621', fontSize: '14px'}}>questautocenter.com</span>
                  <span style={{color: '#545454', fontSize: '14px'}}> › collision-repair › glendale</span>
                </div>
                <div style={{color: '#545454', fontSize: '14px', lineHeight: '20px'}}>
                  Your elite destination for full-service automotive care. Top-tier service with emphasis on quality, speed, and style. Free estimates available.
                </div>
                
                {/* Ad Extensions */}
                <div style={{display: 'flex', gap: '20px', marginTop: '12px'}}>
                  <span style={{color: '#1a0dab', fontSize: '14px'}}>✓ Free Estimates</span>
                  <span style={{color: '#1a0dab', fontSize: '14px'}}>✓ Master Technicians</span>
                  <span style={{color: '#1a0dab', fontSize: '14px'}}>✓ Rent a Bay</span>
                  <span style={{color: '#1a0dab', fontSize: '14px'}}>✓ Paint & Frame</span>
                </div>
                
                {/* Call Extension */}
                <div style={{marginTop: '8px'}}>
                  <span style={{color: '#1a0dab', fontSize: '14px'}}>📞 Call: (323) 310-7000</span>
                  <span style={{color: '#545454', fontSize: '14px'}}> · Open until 5:30 PM</span>
                </div>
              </div>
              
              {/* Competitor Ad (faded) */}
              <div style={{opacity: 0.5}}>
                <div style={{color: '#1a0dab', fontSize: '18px', marginBottom: '5px'}}>Generic Truck Repair Shop - Glendale Collision...</div>
                <div style={{color: '#006621', fontSize: '14px', marginBottom: '5px'}}>competitorsite.com</div>
                <div style={{color: '#545454', fontSize: '14px'}}>Auto body repair in Glendale. Call today for service...</div>
              </div>
            </div>
          </section>

          {/* PPC Strategy */}
          <section className="page-break" style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>PPC Management Strategy</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>Immediate Traffic & Lead Generation</p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>$3-5</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Average CPC</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>8-12%</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Conversion Rate</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>$35-60</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Cost Per Lead</div>
              </div>
            </div>

            <div style={{background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '30px', marginBottom: '20px'}}>
              <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div className="icon">01</div>
                Targeted Campaign Structure
              </h3>
              <ul style={{paddingLeft: '20px', lineHeight: 2}}>
                <li><strong>Truck Repair Campaigns:</strong> High-intent searches for immediate repairs</li>
                <li><strong>Luxury/Performance Services:</strong> Premium detailing, wraps, ceramic coating</li>
                <li><strong>Insurance Direct Billing:</strong> Target insurance claim searches</li>
                <li><strong>Competitor Conquesting:</strong> Bid on Glendale Collision Center, CARSTAR searches</li>
                <li><strong>DIY Bay Rental (Possible Opportunity):</strong> Unique service with minimal competition</li>
              </ul>
            </div>

            <div style={{background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '30px', marginTop: '20px'}}>
              <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div className="icon">03</div>
                Market Intelligence & Opportunities
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
                <div>
                  <h4 style={{color: '#ef4444', marginBottom: '10px'}}>Untapped Keywords</h4>
                  <ul style={{fontSize: '14px', color: '#666', lineHeight: 1.8, listStyle: 'none', padding: 0}}>
                    <li>• "luxury car truck repair shop glendale"</li>
                    <li>• "diy auto repair bay rental"</li>
                    <li>• "ceramic coating los angeles"</li>
                    <li>• "tesla truck repair shop near me"</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: '#ef4444', marginBottom: '10px'}}>Service Differentiators</h4>
                  <ul style={{fontSize: '14px', color: '#666', lineHeight: 1.8, listStyle: 'none', padding: 0}}>
                    <li>• DIY bay rentals (unique offering)</li>
                    <li>• Elite/luxury positioning</li>
                    <li>• Full mechanical + body services</li>
                    <li>• Custom wraps & detailing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Investment */}
          <section style={{marginBottom: '60px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '10px'}}>Investment & Returns</h2>
              <p style={{fontSize: '16px', fontWeight: 300, opacity: 0.9}}>Transparent Pricing, Measurable Results</p>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #e5e5e5',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                color: 'white',
                padding: '30px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '24px', fontWeight: 600, marginBottom: '10px'}}>Smart Start Package</div>
                <div style={{fontSize: '48px', fontWeight: 700, color: '#ef4444'}}>$2,000</div>
                <div style={{fontSize: '16px', color: 'rgba(255,255,255,0.7)'}}>per month</div>
              </div>
              <div style={{padding: '30px'}}>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>Google Ads Budget: $1,500/month</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>PPC Management Fee: $300 (20% of ad spend)</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>Essential SEO Package: $200/month</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>Landing Page Optimization</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>Call Tracking & Recording</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '15px 0'}}>
                  <span style={{color: '#10b981', marginRight: '15px', fontSize: '20px'}}>✓</span>
                  <span>Weekly Performance Updates</span>
                </div>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px'}}>
              <div style={{background: 'white', border: '2px solid #e5e5e5', borderRadius: '12px', padding: '25px', textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>$1,500</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Monthly Ad Budget</div>
              </div>
              <div style={{background: 'white', border: '2px solid #e5e5e5', borderRadius: '12px', padding: '25px', textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>20%</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Management Fee</div>
              </div>
              <div style={{background: 'white', border: '2px solid #e5e5e5', borderRadius: '12px', padding: '25px', textAlign: 'center'}}>
                <div style={{fontSize: '36px', fontWeight: 700, color: '#ef4444', marginBottom: '10px'}}>$200</div>
                <div style={{fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>SEO Services</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '60px',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <h2 style={{fontSize: '36px', fontWeight: 700, marginBottom: '20px'}}>
                Ready to Dominate Your Market?
              </h2>
              <p style={{fontSize: '18px', marginBottom: '30px', opacity: 0.9}}>
                Let's discuss how we can transform Quest Auto Center's digital presence<br/>
                and drive consistent, quality traffic to your shop.
              </p>
              <div style={{
                background: 'white',
                color: '#ef4444',
                padding: '20px 40px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Schedule Your Strategy Call → (702) 900-0265
              </div>
            </div>
          </section>

          {/* Footer */}
          <div style={{textAlign: 'center', padding: '40px 0', borderTop: '2px solid #f0f0f0', marginTop: '60px'}}>
            <div style={{fontSize: '16px', color: '#666', marginBottom: '10px'}}>
              <strong>BodyShop Leads</strong> | Las Vegas, NV
            </div>
            <div style={{fontSize: '16px', color: '#666'}}>
              (702) 900-0265 | hello@truckrepairleads.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestProposal;