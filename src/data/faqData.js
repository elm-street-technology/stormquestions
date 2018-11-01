const faqData = [
  {
    tagline: "How do I apply for",
    title: "FEMA Assistance",
    description:
      "<p>To apply for FEMA assistance visit: <a href='https://www.disasterassistance.gov/' target='_blank'>www.disasterassistance.gov</a> or call 1-800-621-FEMA (1-800-621-3362) TTY: 1-800-462-7585.</p>To find the nearest FEMA Disaster Recovery Center visit: <a href='https://www.fema.gov/disaster-recovery-centers' target='_blank'>https://www.fema.gov/disaster-recovery-centers DRCLocator</a><p>",
  },
  {
    tagline: "How do I receive",
    title: "Emergency Assistance",
    description:
      "<p>If you need emergency help call <strong>9-1-1.</strong></p>",
  },
  {
    tagline: "What if I just need",
    title: "Basic Supplies",
    description:
      "<p>If you need supplies, such as food, water, or ice, please contact your county emergency management at: <a href='https://www.floridadisaster.org/counties/' target='_blank'>https://www.floridadisaster.org/counties/</a> or by phone at <strong>(850) 815-4001</strong> for the location of the nearest distribution center.</p><p>Your county emergency management can provide up-to-date information about shelters and local distribution centers for food and supplies.</p>",
  },
  {
    tagline: "How do I find",
    title: "Help for Seniors",
    description:
      "<p>If you know of a senior who needs assistance call the <strong>Florida Department of Elder Affairs</strong> hotline at <strong>1-800-96-ELDER (1-800-963-5337)</strong>. To report elder abuse, call <strong>1-800-96-ABUSE (1-800-962-2873)</strong>.</p>",
  },
  {
    tagline: "How do I find",
    title: "Help for Veterans",
    description:
      "<p>Veterans in need of assistance or in need of their medication can contact the Veteran Disaster Hotline at <strong>1-800-507-4571</strong> or go to any VA medical facility for assistance.</p>",
  },
  {
    tagline: "How do I find help with",
    title: "Mental Health",
    description:
      "<p>If you or someone you know is experiencing emotional distress please call the Disaster Distress Helpline at <strong>1-800-985-5990</strong> or text <strong>TalkWithUs</strong> to <strong>66746</strong> to connect with a trained counselor. <p>You may also visit: <a href='http://bit.ly/2vH2Huc' target='_blank'/>http://bit.ly/2vH2Huc</a> for more information about managing stress after a disaster and talking with children about traumatic events.</p></p>",
  },
  {
    tagline: "How do I find a",
    title: "Dialysis Center",
    description:
      "<p>To find a dialysis center in your area visit: <a href='https://www.dialysisfinder.com/' target='_blank'>https://www.dialysisfinder.com/</a>. Patients of DaVita Dialysis may contact 1-800-400-8331 to find the nearest Dialysis Center.</p>",
  },
  {
    tagline: "Do I qualify for",
    title: "Mortgage Relief",
    description:
      "<p>To find out if you qualify for temporary mortgage relief, visit the Freddie Mac website at: <a href='http://www.freddiemac.com/about/hurricane-relief.html' target='_blank'>http://www.freddiemac.com/about/hurricane-relief.html</a>, the Fannie Mae website at: <a href='http://www.fanniemae.com/portal/about-fm/hurricane-relief.html' target='_blank'>http://www.fanniemae.com/portal/about-fm/hurricane-relief.html</a> or by phone at <strong>1-800-2FANNIE (800-232-6643)</strong>. <p>To contact the <strong>Federal Housing Finance Agency</strong> visit: <a href='https://www.fhfa.gov/Homeownersbuyer/MortgageAssistance/Pages/Disaster-Assistance.aspx' target='_blank'>https://www.fhfa.gov/Homeownersbuyer/MortgageAssistance/Pages/Disaster-Assistance.aspx</a></p></p>",
  },
  {
    tagline: "Do I qualify for",
    title: "Tax Relief",
    description:
      "<p>Taxpayers in affected areas may be eligible for tax relief from the IRS. To learn more about IRS assistance visit: <a href='https://www.irs.gov/newsroom/tax-relief-in-disaster-situations' target='_blank'>https://www.irs.gov/newsroom/tax-relief-in-disaster-situations</a>.</p>",
  },
  {
    tagline: "Do I qualify for",
    title: "Disaster Recovery Loans",
    description:
      "<p>The U.S. Small Business Administration is providing various disaster loans to qualifying Floridians. For more information about SBA disaster loans visit: <a href='https://www.sba.gov/disaster-assistance/' target='_blank'>https://www.sba.gov/disaster-assistance/</a>. <p>The U.S. Department of Agriculture provides loans to qualifying individuals, businesses, and communities after disasters.</p> <p>For more information visit: <a href='https://www.usda.gov/topics/disaster/storms' target='_blank'>https://www.usda.gov/topics/disaster/storms</a>, or contact the USDA office in Florida at: <strong>(352) 338-3400</strong>.</p></p>",
  },
  {
    tagline: "Do I qualify for",
    title: "Disaster Unemployment Assistance",
    description:
      "<p><p>Floridians who are unemployed as a result of a disaster, and who are ineligible for regular state unemployment insurance, are encouraged to apply for <strong>Disaster Unemployment Assistance (DUA)</strong> through the U.S. Department of Labor.</p> For additional information about DUA visit: <a href='https://workforcesecurity.doleta.gov/unemploy/disaster.asp' target='_blank'>https://workforcesecurity.doleta.gov/unemploy/disaster.asp</a> or contact the U.S. Department of Labor by phone at <strong>1-866-487-2365.</strong></p></p>",
  },
  {
    tagline: "What about",
    title: "Hurricane Response Hiring",
    description:
      "<p>The U.S. Small Business Administration is hiring a variety of temporary positions located throughout areas affected by recent disasters. For more information visit: <a href='https://www.sba.gov/disaster-assistance/hurricane-response-jobs-sba' target='_blank'>https://www.sba.gov/disaster-assistance/hurricane-response-jobs-sba</a>. <p>For <strong>FEMA hiring</strong> visit: <a href='https://careers.fema.gov/hurricane-workforce' target='_blank'>https://careers.fema.gov/hurricane-workforce</a>.</p></p>",
  },
  {
    tagline: "Can I get in-person",
    title: "FEMA Assistance",
    description:
      "<p>For in-person assistance with storm related questions, visit your local <strong>FEMA Disaster Recovery Center</strong>. <p>For a list of centers in your area visit: <a href='https://egateway.fema.gov/ESF6/DRCLocator' target='_blank'>https://egateway.fema.gov/ESF6/DRCLocator</a> or call <strong>1-800-621-FEMA (1-800-621-3362)</strong> TTY: <strong>1-800-462-7585</strong>.</p></p>",
  },
];

export default faqData;
