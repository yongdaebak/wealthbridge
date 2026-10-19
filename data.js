export const products = [
  { id:'fd', name:'3-Month Fixed Deposit', provider:'UOB · Singapore dollar deposit', category:'Deposits', risk:'Low', yield:'3.8%', yieldLabel:'Indicative p.a. interest', minimum:10000, unit:'S$', fee:'No management fee', tags:['Capital-focused','Short tenure'], description:'A short-term fixed deposit option for cash that is not immediately needed. Principal and returns are subject to the bank’s terms.', color:'amber', symbol:'coins', featured:true, cka:false, amountExample:10000, highlights:['Predictable interest over the chosen tenure','Suitable for short-term cash planning','Early withdrawal may reduce interest'] },
  { id:'fct', name:'Frasers Centrepoint Trust (FCT)', provider:'SGX-listed · Retail REIT', category:'REITs', risk:'Moderate', yield:'5.2%', yieldLabel:'Illustrative distribution yield', minimum:1000, unit:'S$', fee:'Brokerage fees may apply', tags:['Potential income','SGX listed'], description:'A Singapore-listed retail REIT with a portfolio of shopping malls. Distributions and unit prices can change; capital is at risk.', color:'blue', symbol:'building', featured:true, cka:true, amountExample:10000, highlights:['Exposure to Singapore suburban retail assets','Historical distributions do not guarantee future income','REIT prices and distributions can fall'] },
  { id:'balanced', name:'Global Balanced Fund', provider:'UOB Asset Management · Multi-asset', category:'Funds', risk:'Moderate', yield:'5.6%', yieldLabel:'Illustrative return, not guaranteed', minimum:1000, unit:'S$', fee:'Illustrative fund fee 0.90% p.a.', tags:['Diversified','Long horizon'], description:'A balanced exposure to global equities and fixed income. Investment values may rise or fall.', color:'purple', symbol:'globe', featured:false, cka:true, amountExample:10000, highlights:['Global asset-class diversification','Performance is market-dependent','Fund charges reduce net returns'] },
  { id:'sgbond', name:'Singapore Government Bond', provider:'SGS · Government security', category:'Bonds', risk:'Low', yield:'3.2%', yieldLabel:'Illustrative yield to maturity', minimum:1000, unit:'S$', fee:'Transaction costs may apply', tags:['Income focus','Government-backed issuer'], description:'A Singapore government debt instrument. Selling before maturity may result in a gain or loss.', color:'teal', symbol:'shield', featured:false, cka:false, amountExample:10000, highlights:['Defined maturity and coupon schedule','Market price varies with interest rates','Liquidity conditions can affect selling price'] },
  { id:'equity', name:'Global Growth Equity Fund', provider:'Illustrative global equity strategy', category:'Funds', risk:'High', yield:'8.1%', yieldLabel:'Hypothetical long-run return, not guaranteed', minimum:1000, unit:'S$', fee:'Illustrative fund fee 1.20% p.a.', tags:['Growth','Higher volatility'], description:'High-equity exposure for investors able to tolerate large fluctuations and potential loss.', color:'rose', symbol:'trend', featured:false, cka:true, amountExample:10000, highlights:['Potential long-term growth','Substantial market volatility','May not suit a moderate risk profile'] }
];

export const clients = [
  {id:'sarah',name:'Sarah Tan', initials:'ST',age:32, occupation:'Marketing Manager', assets:642380, risk:'Moderate',goal:'Wealth growth, home purchase',nextReview:'In 3 months',consent:true,cka:true, status:'Medium', trigger:'FD maturity in 2 months', color:'rose', savings:100000, idleCash:23000, drift:8},
  {id:'james',name:'James Lee',initials:'JL',age:39,occupation:'Software Engineer', assets:895000,risk:'High',goal:'Long-term wealth growth',nextReview:'Next month',consent:true,cka:true,status:'High',trigger:'Portfolio drift +6% vs target',color:'mint',savings:40000,idleCash:12000,drift:6},
  {id:'emily',name:'Emily Wong',initials:'EW',age:35,occupation:'Consultant',assets:388000,risk:'Moderate',goal:'Stable income',nextReview:'In 2 months',consent:true,cka:false,status:'Medium',trigger:'Idle cash S$20,000',color:'purple',savings:80000,idleCash:20000,drift:2},
  {id:'daniel',name:'Daniel Koh',initials:'DK',age:42,occupation:'Entrepreneur',assets:1250000,risk:'Low',goal:'Capital preservation',nextReview:'In 6 months',consent:true,cka:false,status:'Low',trigger:'New REIT opportunity',color:'amber',savings:200000,idleCash:90000,drift:1},
  {id:'grace',name:'Grace Chan',initials:'GC',age:45,occupation:'Educator',assets:505200,risk:'Moderate',goal:'Retirement preparation',nextReview:'Next week',consent:true,cka:true,status:'Medium',trigger:'Upcoming life event (wedding)',color:'blue',savings:90000,idleCash:15000,drift:4},
  {id:'kevin',name:'Kevin Lim',initials:'KL',age:30,occupation:'Product Designer',assets:731900,risk:'High',goal:'Long-term investment',nextReview:'Next month',consent:false,cka:true,status:'High',trigger:'Market volatility, portfolio down',color:'teal',savings:20000,idleCash:6000,drift:9}
];

export const starterState = {
  messages:[
    {id:'m1',from:'rm',text:'Hi Sarah! Your fixed deposit is due for renewal in two months. Would you like me to walk you through the available options?',time:'9:15 AM'},
    {id:'m2',from:'client',text:'Yes, please! Could you also advise on REITs or other options for better yield?',time:'9:28 AM'},
    {id:'m3',from:'rm',text:'Of course! I’ll prepare a few options based on your risk profile and get back to you shortly.',time:'9:30 AM'}
  ],
  requests:[],
  recommendations:[],
  alerts:[
    {id:'a1',clientId:'sarah',title:'FD maturity in 2 months',type:'Maturity',urgency:'Medium',done:false},
    {id:'a2',clientId:'james',title:'Portfolio drift detected',type:'Portfolio',urgency:'High',done:false},
    {id:'a3',clientId:'emily',title:'Idle cash S$20,000',type:'Cash',urgency:'Medium',done:false},
    {id:'a4',clientId:'kevin',title:'Reassess volatility exposure',type:'Risk',urgency:'High',done:false}
  ],
  audit:[
    {id:'e1',at:'Demo setup',actor:'System',action:'Approved product shelf and suitability rules loaded'},
    {id:'e2',at:'Demo setup',actor:'Monitoring agent · simulated',action:'Flagged Sarah’s upcoming FD maturity'}
  ]
};

export const money=(n)=>'S$ '+Number(n).toLocaleString('en-SG',{maximumFractionDigits:0});
export function suitability(client,product){
  if(!client.consent)return {ok:false,reason:'Client has not provided recommendation consent.'};
  const order={Low:1,Moderate:2,High:3};
  if(order[product.risk]>order[client.risk])return {ok:false,reason:`${product.risk}-risk product exceeds ${client.risk.toLowerCase()} client risk profile.`};
  if(product.cka&&!client.cka)return {ok:false,reason:'Client knowledge assessment (CKA) is required before recommendation.'};
  return {ok:true,reason:'Risk tier, consent and applicable knowledge checks passed (demo rules only).'};
}
