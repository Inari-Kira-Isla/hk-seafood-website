"use client";

import { useState } from "react";

const content = {
  en: {
    formTitle: "Send Us a Message",
    name: "Full Name",
    namePlaceholder: "John Smith",
    company: "Company Name (optional)",
    companyPlaceholder: "Restaurant, Hotel, or Business Name",
    phone: "Phone Number",
    phonePlaceholder: "+852 XXXX XXXX",
    email: "Email Address",
    emailPlaceholder: "you@company.com",
    inquiryType: "Inquiry Type",
    inquiryTypeWholesale: "Wholesale Inquiry",
    inquiryTypePartnership: "Partnership Opportunity",
    inquiryTypeConsultation: "Industry Consultation",
    product: "Product Interest",
    productSeaUrchin: "Sea Urchin (Uni)",
    productSalmon: "Salmon",
    productBoth: "Both",
    volume: "Monthly Volume Estimate",
    volumeSmall: "Under 10 kg",
    volumeMedium: "10 – 50 kg",
    volumeLarge: "50 – 200 kg",
    volumeEnterprise: "200 kg or more",
    message: "Additional Message (optional)",
    messagePlaceholder: "Tell us more about your needs, delivery location, or timing...",
    submit: "Send Inquiry",
    submitting: "Sending...",
    successTitle: "Thank you!",
    successMsg:
      "We've received your inquiry and will be in touch within 1 business day.",
    errorMsg:
      "Something went wrong. Please try again or contact us directly via WhatsApp.",
  },
  "zh-HK": {
    formTitle: "發送訊息給我們",
    name: "全名",
    namePlaceholder: "陳大文",
    company: "公司名稱（選填）",
    companyPlaceholder: "餐廳、酒店或商業名稱",
    phone: "電話號碼",
    phonePlaceholder: "+852 XXXX XXXX",
    email: "電子郵件",
    emailPlaceholder: "you@company.com",
    inquiryType: "查詢類型",
    inquiryTypeWholesale: "批發查詢",
    inquiryTypePartnership: "合作機會",
    inquiryTypeConsultation: "行業諮詢",
    product: "感興趣的產品",
    productSeaUrchin: "海膽",
    productSalmon: "三文魚",
    productBoth: "兩者均有興趣",
    volume: "每月預計需求量",
    volumeSmall: "10 公斤以下",
    volumeMedium: "10 – 50 公斤",
    volumeLarge: "50 – 200 公斤",
    volumeEnterprise: "200 公斤或以上",
    message: "其他說明（選填）",
    messagePlaceholder: "請告訴我們您的需求、配送地點或時間安排…",
    submit: "提交查詢",
    submitting: "提交中…",
    successTitle: "感謝您的查詢！",
    successMsg: "我們已收到您的查詢，將在一個工作日內與您聯繫。",
    errorMsg: "發生錯誤，請重試或通過 WhatsApp 直接聯絡我們。",
  },
};

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  inquiryType: string;
  product: string;
  volume: string;
  message: string;
};

export function ContactForm({ locale }: { locale: string }) {
  const c = content[locale as keyof typeof content] ?? content.en;
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    inquiryType: "wholesale",
    product: "both",
    volume: "medium",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function update(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow";

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{c.successTitle}</h3>
        <p className="text-gray-600 max-w-sm mx-auto">{c.successMsg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{c.formTitle}</h2>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {c.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={c.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.company}</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder={c.companyPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {c.phone} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder={c.phonePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {c.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={c.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.inquiryType}</label>
          <select
            value={formData.inquiryType}
            onChange={(e) => update("inquiryType", e.target.value)}
            className={inputClass}
          >
            <option value="wholesale">{c.inquiryTypeWholesale}</option>
            <option value="partnership">{c.inquiryTypePartnership}</option>
            <option value="consultation">{c.inquiryTypeConsultation}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.product}</label>
          <select
            value={formData.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputClass}
          >
            <option value="seaUrchin">{c.productSeaUrchin}</option>
            <option value="salmon">{c.productSalmon}</option>
            <option value="both">{c.productBoth}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.volume}</label>
          <select
            value={formData.volume}
            onChange={(e) => update("volume", e.target.value)}
            className={inputClass}
          >
            <option value="small">{c.volumeSmall}</option>
            <option value="medium">{c.volumeMedium}</option>
            <option value="large">{c.volumeLarge}</option>
            <option value="enterprise">{c.volumeEnterprise}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{c.message}</label>
        <textarea
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={c.messagePlaceholder}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {c.errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "submitting" ? c.submitting : c.submit}
      </button>
    </form>
  );
}
