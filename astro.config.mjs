import { defineConfig } from "astro/config";
import i18nPkg from "astro-i18n";
const { default: astroI18n } = i18nPkg;

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18n()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    translations: {
      en: {
        home: {
          title: "AI",
          subtitle: "Empower your business with AI solutions",
          nav: {
            overview: "Overview",
            aboutUs: "About Us",
            businessPlan: "Business Plan",
            support: "Support"
          },
          aiRoles: {
            marketingAI: {
              title: "Marketing AI",
              responsibilities: "Content Creation, Social Media Management, Campaign Analysis",
              technologies: "GPT-4, Analytics Tools, Social Media APIs"
            },
            financeAI: {
              title: "Finance AI",
              responsibilities: "Financial Analysis, Risk Assessment, Investment Planning",
              technologies: "Machine Learning, Financial Models, Market Data APIs"
            },
            recruitingAI: {
              title: "Recruiting AI",
              responsibilities: "Resume Screening, Candidate Matching, Interview Scheduling",
              technologies: "NLP, ATS Integration, Calendar APIs"
            }
          }
        }
      },
      zh: {
        home: {
          title: "人工智能",
          subtitle: "用人工智能解决方案赋能您的业务",
          nav: {
            overview: "概述",
            aboutUs: "关于我们",
            businessPlan: "商业计划",
            support: "支持"
          },
          aiRoles: {
            marketingAI: {
              title: "营销人工智能",
              responsibilities: "内容创作, 社交媒体管理, 活动分析",
              technologies: "GPT-4, 分析工具, 社交媒体API"
            },
            financeAI: {
              title: "金融人工智能",
              responsibilities: "财务分析, 风险评估, 投资规划",
              technologies: "机器学习, 金融模型, 市场数据API"
            },
            recruitingAI: {
              title: "招聘人工智能",
              responsibilities: "简历筛选, 候选人匹配, 面试安排",
              technologies: "自然语言处理, ATS集成, 日历API"
            }
          }
        }
      }
    }
  }
});
