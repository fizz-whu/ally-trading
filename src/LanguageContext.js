import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    header: {
      companyName: "Global Commodities Trading Co.",
      products: "Products",
      contact: "Contact",
      login: "Login"
    },
    home: {
      heroTitle: "Your Global Partner in Commodity Trading",
      heroDescription: "Ally International Trading Inc. is a leading international trading company specializing in a wide range of commodities. With a global network and deep market insights, we connect buyers and sellers across the world, ensuring efficient and reliable trade solutions.",
      exploreProducts: "Explore Our Products",
      ourProducts: "Our Products",
      whyChooseUs: "Why Choose Us?",
      ourCommitment: "Our Commitment",
      commitmentDescription: "At Ally International Trading Inc., we are dedicated to providing our clients with the highest level of service and expertise. Our team of experienced professionals works tirelessly to ensure that every transaction is executed smoothly and efficiently, delivering value and building long-term partnerships.",
      globalReach: "Global Reach",
      globalReachDesc: "Extensive network of partners and suppliers across the globe",
      marketExpertise: "Market Expertise",
      marketExpertiseDesc: "Deep understanding of commodity markets and trends",
      reliableSolutions: "Reliable Solutions",
      reliableSolutionsDesc: "Efficient and dependable trading and logistics services",
      sustainablePractices: "Sustainable Practices",
      sustainablePracticesDesc: "Commitment to ethical and environmentally responsible trading",
      readyToTrade: "Ready to Trade?",
      readyToTradeDesc: "Get in touch with our team to discuss your commodity trading needs and how we can help you achieve your goals.",
      footer: {
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        copyright: "© 2024 Ally International Trading Inc. All rights reserved."
      }
    },
    products: {
      title: "Our Products",
      subtitle: "Explore our range of high-quality commodities sourced from trusted suppliers worldwide.",
      breadcrumb: {
        home: "Home",
        products: "Products"
      },
      viewDetails: "View Details",
      origin: "Origin",
      grade: "Grade",
      packaging: "Packaging",
      whyChoose: "Why Choose Our Products?",
      whyChooseDesc: "We are committed to providing high-quality commodities sourced from trusted suppliers worldwide. Our products meet international standards and are backed by our commitment to sustainability and ethical sourcing practices.",
      generalInquiries: "General Inquiries",
      inquiryPlaceholder: "Enter your inquiry here",
      submitInquiry: "Submit Inquiry",
      sugar: {
        name: "Sugar",
        description: "High-quality sugar for various industrial and consumer applications.",
        detailDescription: "High-quality sugar sourced from leading producers worldwide. Available in refined and unrefined varieties.",
        fullDescription: "Our sugar is sourced from top producers, ensuring consistent quality and purity. We offer various types to meet diverse needs, from food and beverage production to industrial applications. Our commitment to sustainability and ethical sourcing ensures a reliable supply chain.",
        origin: "Brazil, Thailand, India",
        grade: "45 ICUMSA",
        packaging: "25kg, 50kg bags, bulk",
        type: "Refined, Unrefined",
        uses: "Food, Beverage, Industrial",
        specifications: "Product Specifications",
        about: "About Our Sugar",
        inquiries: "Inquiries"
      },
      chickenFeet: {
        name: "Chicken Feet",
        fullName: "Frozen Chicken Feet",
        description: "Processed chicken feet, a popular ingredient in Asian cuisine.",
        detailDescription: "Premium quality frozen chicken feet, sourced from trusted suppliers. Ideal for various culinary applications.",
        origin: "Brazil",
        grade: "Grade A",
        weight: "50-70 grams per piece",
        packaging: "10 kg cartons",
        specifications: "Product Specifications",
        suggestedUses: "Suggested Uses",
        usesDescription: "Chicken feet are a popular ingredient in various cuisines, known for their unique texture and flavor. They are commonly used in soups, stews, and braised dishes. Their gelatinous texture adds richness and depth to broths and sauces.",
        contactUs: "Contact Us",
        contactDesc: "For inquiries, pricing, and bulk orders, please contact our sales team.",
        sendInquiry: "Send Inquiry"
      },
      petroleumCoke: {
        name: "Petroleum Coke",
        description: "Petroleum coke, a carbon-rich solid material used in various industries."
      },
      aluminumIngot: {
        name: "Aluminum Ingot",
        description: "Aluminum ingots, essential for manufacturing and construction."
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help. Please reach out to us with any questions or inquiries.",
      form: {
        name: "Name",
        namePlaceholder: "Your Name",
        email: "Email",
        emailPlaceholder: "Your Email",
        subject: "Subject",
        subjectPlaceholder: "Subject",
        message: "Message",
        messagePlaceholder: "Your Message",
        submit: "Submit"
      },
      locations: "Our Locations",
      address: "Address",
      addressValue: "1390 Market Street, San Francisco, CA 94102",
      phone: "Phone",
      phoneValue: "626-998-6149",
      emailValue: "meijun.li@allyintltrading.com"
    }
  },
  zh: {
    header: {
      companyName: "全球大宗商品贸易有限公司",
      products: "产品",
      contact: "联系我们",
      login: "登录"
    },
    home: {
      heroTitle: "您的全球大宗商品贸易伙伴",
      heroDescription: "联盟国际贸易有限公司是一家领先的国际贸易公司，专业从事各种大宗商品贸易。凭借全球网络和深入的市场洞察，我们连接世界各地的买家和卖家，确保高效可靠的贸易解决方案。",
      exploreProducts: "探索我们的产品",
      ourProducts: "我们的产品",
      whyChooseUs: "为什么选择我们？",
      ourCommitment: "我们的承诺",
      commitmentDescription: "在联盟国际贸易有限公司，我们致力于为客户提供最高水平的服务和专业知识。我们经验丰富的专业团队不懈努力，确保每笔交易都能顺利高效地执行，创造价值并建立长期合作伙伴关系。",
      globalReach: "全球覆盖",
      globalReachDesc: "遍布全球的合作伙伴和供应商网络",
      marketExpertise: "市场专业知识",
      marketExpertiseDesc: "对大宗商品市场和趋势的深入理解",
      reliableSolutions: "可靠的解决方案",
      reliableSolutionsDesc: "高效可靠的贸易和物流服务",
      sustainablePractices: "可持续实践",
      sustainablePracticesDesc: "致力于道德和环境负责任的贸易",
      readyToTrade: "准备交易了吗？",
      readyToTradeDesc: "联系我们的团队，讨论您的大宗商品贸易需求以及我们如何帮助您实现目标。",
      footer: {
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        copyright: "© 2024 联盟国际贸易有限公司 版权所有。"
      }
    },
    products: {
      title: "我们的产品",
      subtitle: "探索我们从全球值得信赖的供应商采购的高品质大宗商品。",
      breadcrumb: {
        home: "首页",
        products: "产品"
      },
      viewDetails: "查看详情",
      origin: "产地",
      grade: "等级",
      packaging: "包装",
      whyChoose: "为什么选择我们的产品？",
      whyChooseDesc: "我们致力于提供从全球值得信赖的供应商采购的高品质大宗商品。我们的产品符合国际标准，并得到我们对可持续发展和道德采购实践的承诺支持。",
      generalInquiries: "一般询价",
      inquiryPlaceholder: "请在此输入您的询价",
      submitInquiry: "提交询价",
      sugar: {
        name: "糖",
        description: "用于各种工业和消费者应用的高品质糖。",
        detailDescription: "从全球领先生产商采购的高品质糖。提供精炼和未精炼品种。",
        fullDescription: "我们的糖来自顶级生产商，确保一致的质量和纯度。我们提供各种类型以满足不同需求，从食品饮料生产到工业应用。我们对可持续发展和道德采购的承诺确保了可靠的供应链。",
        origin: "巴西、泰国、印度",
        grade: "45 ICUMSA",
        packaging: "25公斤、50公斤袋装、散装",
        type: "精炼、未精炼",
        uses: "食品、饮料、工业",
        specifications: "产品规格",
        about: "关于我们的糖",
        inquiries: "询价"
      },
      chickenFeet: {
        name: "鸡爪",
        fullName: "冷冻鸡爪",
        description: "加工鸡爪，亚洲菜肴中的热门食材。",
        detailDescription: "优质冷冻鸡爪，来自值得信赖的供应商。适用于各种烹饪应用。",
        origin: "巴西",
        grade: "A级",
        weight: "每只50-70克",
        packaging: "10公斤纸箱",
        specifications: "产品规格",
        suggestedUses: "建议用途",
        usesDescription: "鸡爪是各种菜肴中的热门食材，以其独特的质地和风味而闻名。通常用于汤、炖菜和红烧菜肴。其胶质质地为肉汤和酱汁增添丰富感和深度。",
        contactUs: "联系我们",
        contactDesc: "如需询价、定价和批量订单，请联系我们的销售团队。",
        sendInquiry: "发送询价"
      },
      petroleumCoke: {
        name: "石油焦",
        description: "石油焦，用于各种工业的富碳固体材料。"
      },
      aluminumIngot: {
        name: "铝锭",
        description: "铝锭，制造业和建筑业的必需品。"
      }
    },
    contact: {
      title: "联系我们",
      subtitle: "我们在这里为您服务。如有任何问题或询问，请联系我们。",
      form: {
        name: "姓名",
        namePlaceholder: "您的姓名",
        email: "邮箱",
        emailPlaceholder: "您的邮箱",
        subject: "主题",
        subjectPlaceholder: "主题",
        message: "消息",
        messagePlaceholder: "您的消息",
        submit: "提交"
      },
      locations: "我们的位置",
      address: "地址",
      addressValue: "1390 Market Street, San Francisco, CA 94102",
      phone: "电话",
      phoneValue: "626-998-6149",
      emailValue: "meijun.li@allyintltrading.com"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return { t: context.t, i18n: { language: context.language, changeLanguage: context.changeLanguage } };
};