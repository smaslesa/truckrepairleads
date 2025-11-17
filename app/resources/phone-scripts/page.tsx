'use client'

import React, { useState } from 'react'
import { Phone, PlayCircle, Copy, Download, Clock, UserX, Calendar, DollarSign } from 'lucide-react'

const PhoneScriptsPage = () => {
  const [activeScript, setActiveScript] = useState('first-call')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyScript = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const scripts = {
    'first-call': {
      title: 'First Call - Intake Script',
      icon: <Phone className="w-5 h-5" />,
      conversionRate: '67%',
      script: `"Thank you for calling [Shop Name], this is [Your Name]. I heard you were in an accident - are you okay?"

[Wait for response - show empathy]

"I'm glad you're alright. I know this is stressful, but we're here to help make this as easy as possible. Let me get some quick information..."

"What's your name?" [Get name]
"And your phone number in case we get disconnected?" [Get phone]
"Can you tell me what happened?" [Listen, take notes]

"Is the vehicle safe to drive?"
- If NO: "We can arrange towing right now. Where is the vehicle?"
- If YES: "Great, when would you like to bring it in for a free estimate?"

"Have you filed an insurance claim yet?"
- If NO: "No problem, we can help you with that when you come in."
- If YES: "Perfect, what insurance company? We work with all of them."

"I have an opening [TODAY/TOMORROW] at [TIME]. We'll do a complete inspection, take photos for your insurance, and get you a rental car if needed. The estimate is completely free and takes about 30 minutes."

"Does [TIME] work for you?" [Book appointment]

"Perfect! I have you scheduled for [DATE/TIME]. We're located at [ADDRESS]. You'll want to bring your driver's license, insurance card, and registration. We'll handle everything else."

"Do you have any questions?"

"We'll see you [DATE/TIME]. And [Name], don't worry - we'll take great care of you and your vehicle."`,
      tips: [
        'Always ask if they\'re okay first - builds rapport',
        'Get phone number early in case of disconnect',
        'Offer same-day or next-day appointments',
        'Mention free estimate multiple times',
        'End with reassurance'
      ]
    },
    'follow-up': {
      title: 'Estimate Follow-up',
      icon: <Clock className="w-5 h-5" />,
      conversionRate: '34%',
      script: `"Hi [Name], this is [Your Name] from [Shop Name]. I'm calling about the estimate we did on your [Vehicle] last [Day]."

"I wanted to check if you had any questions about the estimate or the repair process?"

[Wait for response]

"I understand you're probably comparing shops. Here's what sets us apart:
- We guarantee our work for as long as you own the vehicle
- We handle all the insurance paperwork
- We'll provide a free rental car
- We're the only shop in town with [Certification]"

"I'd like to help you get your car fixed. If you schedule today, I can offer:
- $100 off your deductible
- Priority scheduling - we'll start tomorrow
- Free pickup of your vehicle"

"This offer is only good today because I have a spot opening tomorrow. Can we get you scheduled?"

[If hesitant]: "What's holding you back from moving forward?"
[Address objection]

"How about this - we start the teardown, and if we find anything concerning, we stop and call you before proceeding. You have nothing to lose and everything to gain. Should we get started?"`,
      tips: [
        'Call within 24-48 hours of estimate',
        'Create urgency with limited-time offer',
        'Address specific objections',
        'Use assumptive close'
      ]
    },
    'objections': {
      title: 'Common Objections',
      icon: <UserX className="w-5 h-5" />,
      conversionRate: 'N/A',
      script: `PRICE OBJECTION: "I found a cheaper estimate"
→ "I understand price is important. Can I ask - did their estimate include [OEM parts/warranty/rental]? We could be cheaper too if we cut corners, but we won't risk your safety or our reputation. The real question is: Do you want it done right the first time?"

TIME OBJECTION: "I don't have time right now"
→ "I completely understand you're busy. That's why we offer free pickup and delivery. We can get your car tonight and have it back to you [timeframe]. You won't lose a single minute of your day. Should I send our driver?"

INSURANCE OBJECTION: "Waiting to hear from insurance"
→ "Smart to work with insurance. Here's the thing - they're not in a hurry. Meanwhile, your car could be developing rust or hidden damage. We can start documenting everything for your claim and call them together. This actually speeds up approval. Want to get the ball rolling?"

TRUST OBJECTION: "Need to think about it"
→ "Of course, it's a big decision. What specifically would you like to think about? Is it the price, the timeline, or maybe you want to check our reviews? I can send you links to our 200+ five-star reviews right now. What would help you feel confident moving forward?"

COMPETITOR OBJECTION: "Going with another shop"
→ "I respect that. Can I ask what made you choose them? [Listen] Those are good reasons. Before you commit, did they mention [specific advantage]? Also, if anything goes wrong there, please keep our number. We fix other shops' mistakes weekly - hopefully not yours!"`,
      tips: [
        'Never argue or get defensive',
        'Acknowledge their concern first',
        'Redirect to value, not price',
        'Always leave door open'
      ]
    },
    'appointment': {
      title: 'Appointment Booking',
      icon: <Calendar className="w-5 h-5" />,
      conversionRate: '89%',
      script: `"Hi [Name], I'm calling to schedule your repair appointment for your [Vehicle]."

"I have your estimate here for $[Amount]. Let me check our schedule..."

"I have openings:
- [Day] morning at 8am - you'd get your car back by [Day]
- [Day] afternoon at 1pm - you'd get your car back by [Day]  
- [Day] morning - this would get you priority service"

"Which works better for your schedule?"

[Book appointment]

"Perfect! I have you down for [Day] at [Time]. Now let me tell you what to expect:

1. Bring your vehicle to our front entrance
2. We'll have your paperwork ready
3. Your rental car will be waiting
4. We'll call you with updates every day
5. You'll get photos of the repair progress

"For insurance, bring:
- Driver's license
- Insurance card
- Claim number if you have it

"Any questions about the process?"

"Great! We'll send you a text reminder the day before. See you [Day] at [Time]!"`,
      tips: [
        'Offer 3 appointment options',
        'Explain exact process',
        'Set clear expectations',
        'Send confirmation text'
      ]
    },
    'voicemail': {
      title: 'Voicemail Templates',
      icon: <Phone className="w-5 h-5" />,
      conversionRate: '12% callback',
      script: `FIRST CALL VM:
"Hi [Name], this is [Your Name] from [Shop Name]. I'm calling about your recent accident. I know you're probably getting lots of calls, but I have some important information about your repair options and insurance rights. Please call me back at [Phone] - I'm here until 6pm today."

ESTIMATE FOLLOW-UP VM:
"Hi [Name], [Your Name] from [Shop Name]. Quick update on your estimate - I found a way to save you $[Amount] on your deductible, but I need to confirm by end of day. Call me back at [Phone]."

APPOINTMENT REMINDER VM:
"Hi [Name], just confirming your appointment tomorrow at [Time]. If you need to reschedule, please call immediately at [Phone]. Otherwise, we'll see you tomorrow with your rental car ready!"

WIN-BACK VM:
"Hi [Name], [Your Name] from [Shop Name]. I heard you went with another shop - I respect that. I'm leaving our direct line [Phone] in case you need anything. We're here if you need a second opinion or run into any issues. Good luck with your repair!"`,
      tips: [
        'Keep under 20 seconds',
        'Lead with benefit or urgency',
        'Always give callback number twice',
        'Sound enthusiastic, not salesy'
      ]
    }
  }

  const currentScript = scripts[activeScript as keyof typeof scripts]

  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4" />
            PROVEN PHONE SCRIPTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Convert More Calls Into
            <span className="block text-green-600">Scheduled Appointments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Word-for-word scripts that work. Tested in hundreds of shops with documented conversion rates.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2">
            {Object.entries(scripts).map(([key, script]) => (
              <button
                key={key}
                onClick={() => setActiveScript(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeScript === key
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {script.icon}
                <span className="hidden md:inline">{script.title}</span>
                {script.conversionRate && (
                  <span className="text-xs opacity-75 hidden lg:inline">
                    {script.conversionRate}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentScript.title}</h2>
                  {currentScript.conversionRate && (
                    <p className="text-green-600 font-medium mt-1">
                      Average conversion rate: {currentScript.conversionRate}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => copyScript(currentScript.script, activeScript)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  {copiedId === activeScript ? (
                    <>Copied!</>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Script
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="p-6">
              <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                {currentScript.script}
              </pre>
            </div>
            {currentScript.tips && (
              <div className="p-6 bg-green-50 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Pro Tips:</h3>
                <ul className="space-y-2">
                  {currentScript.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Use These Scripts to Grow Your Business
          </h2>
          <p className="text-gray-600 mb-8">
            Copy any script above and customize it for your shop. Practice the techniques and track your conversion rates.
          </p>
        </div>
      </section>
    </>
  )
}

export default PhoneScriptsPage
