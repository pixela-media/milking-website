import React from 'react'
import Navbar from '../components/layout/Navbar'
import ExporeHero from '../components/explore/ExporeHero'
import Containers from '../components/explore/Containers'
import CallToAction from '../components/common/CallToAction'
import Footer from '../components/layout/Footer'
import Timeline from '../components/explore/Timeline';

const Explore = () => {
  const certificationData = [
    {
      icon: 'shield',
      title: 'Strict Standards, Open to All',
      description: 'From day one, the farm must meet HFAC\'s Animal Care Standards—uniform across species & grounded in science, vet insights, and real-world farm expertise.'
    },
    {
      icon: 'email',
      title: 'No "Phase-In"—Only Full Compliance',
      description: 'Unlike some programs, Certified Humane® requires complete alignment with its rigorous criteria before certification is granted. No gradual ramp-up allowed.'
    },
    {
      icon: 'building',
      title: 'Insulated, Independent Audits',
      description: 'Trained animal welfare scientists and veterinarians conduct the inspections ensuring unbiased validation of holistic care from birth to handling.'
    },
    {
      icon: 'clipboard',
      title: 'Yearly Checks Always Evolving',
      description: 'Certification isn\'t permanent. Farms undergo annual inspections to make sure they consistently uphold the standards, or risk losing the label.'
    }
  ];

  const globalImpactData = [
    {
      icon: 'shield',
      title: 'Uncompromised Animal Dignity',
      description: 'Certified Humane® farms commit to a cruelty-free approach: no cages, no tie-stalls, allowing natural expression like dust-bathing, grazing, and foraging.'
    },
    {
      icon: 'star',
      title: 'Global Trust, Local Impact',
      description: 'Today, this certification spans across countries including India, Australia, Brazil, Singapore, and beyond offering Indian consumers access to globally trusted dairy ethics.'
    },
    {
      icon: 'clipboard',
      title: 'Consumer-Driven Change',
      description: 'This isn\'t top-down legislation; it\'s a compassionate marketplace. Shoppers seeking meaning in their food spark demand pushing ethical farming forward.'
    },
    {
      icon: 'check',
      title: 'A Legacy of Transparency & Trust',
      description: 'With backing from media, conservation groups, and humane societies, the certification serves as a beacon of credibility a mark consumers can truly trust.'
    }
  ];

  const historyTimeline = [
    {
      number: 1,
      title: "A Movement, Not Just a Milestone",
      description: "At Milking, earning the Certified Humane® seal was never about a label it was about sparking a revolution. We became the first Indian dairy brand to reach this global standard, setting a new expectation for what ethical and compassionate dairy looks like in India."
    },
    {
      number: 2,
      title: "Rigorous Global Standards | No Shortcuts",
      description: "This prestigious certification isn't handed out lightly. Our journey began with a comprehensive application, followed by detailed documentation and strict tracing of our entire operation from feeding to processing. Independent veterinarians and animal welfare scientists conducted on-site audits covering everything from housing standards to diet, handling, and animal health. Only after full compliance could we proudly carry this badge."
    },
    {
      number: 3,
      title: "Empowering Ethical Farming Across India",
      description: "But we didn't stop there. Milking believes in spreading this ethical legacy. We actively train and support other farmers to adopt humane practices, sharing best farming techniques, offering fair incentives, and procuring milk from those who meet our standards. This creates a ripple effect, elevating dairy ethics across our community."
    },
    {
      number: 4,
      title: "Transparency Through Farm Engagement",
      description: "Our commitment isn't hidden behind labels we live it. Through immersive visits to our Maggemane farm, visitors witness firsthand how humane dairy looks in action. These tours educate, build trust, and inspire conscious choices in every visitor."
    },
    {
      number: 5,
      title: "The Milking Promise: Compassion Meets Credibility",
      description: "By leading this transformation, Milking doesn't just deliver dairy—we deliver integrity, compassion, and a global standard. We created a legacy that nurtures animals, families, and farmers alike."
    }
  ];

  return (
    <div>
      <Navbar />
      <section className='bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1'>
        <ExporeHero />
      </section>
      <Containers
        title="How Does a Farm Earn This Gold Standard?"
        subtitle="Earning the Certified Humane® seal meant meeting global animal welfare benchmarks—every step audited by independent veterinarians and scientists. No shortcuts, just full proof of ethical, stress-free dairy farming."
        containers={certificationData}
      />
      <Timeline
        title="Why We Made History:"
        subtitle="First in India to Earn the Certified Humane®"
        timelineItems={historyTimeline}
      />
      <Containers
        title="Why It Matters Globally"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit mattis ut pharetra mollis sit aliquam sit nullam."
        containers={globalImpactData}
      />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#7C4098] to-[#9B5AB3]">
        <CallToAction />
      </section>

      <Footer />
    </div>
  )
}

export default Explore
