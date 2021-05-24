import React from "react";
import CustomSection from "../../components/CustomSection";
import { CovidBanner } from "./components/CovidBanner";
import { CovidModels } from "./components/CovidModels";
import { DetailDashboard } from "./components/DetailDashboard";
import { DetailInfo1 } from "./components/DetailInfo1";
import { DetailInfo2 } from "./components/DetailInfo2";
import { SmallBanner } from "./components/SmallBanner";
import { CovidDemo } from "./components/CovidDemo";
import "./Covid.css";

export const Covid = () => {
  const commonClasses = "d-flex justify-content-center h-100";
  return (
    <>
      <CustomSection
        height="h-auto header-margin"
        bgColor="bg-prussian-blue"
        classes={"h-768"}
      >
        <CovidBanner classes={`${commonClasses} m-0 padding-all pb-0`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white" classes="covidModels">
        <CovidModels classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection
        height="h-auto"
        bgColor="bg-lightgray"
        classes="covidSmallBanner"
      >
        <SmallBanner classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white" classes="detailInfo-01">
        <CovidDemo classes={`${commonClasses} padding-all mb-lg-5`} />
      </CustomSection>
      <CustomSection
        height="h-auto"
        bgColor="bg-lightgray"
        classes="detailDashboardSmallBanner"
      >
        <DetailDashboard classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white" classes="detailInfo-01">
        <DetailInfo1 classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection
        height="h-auto"
        bgColor="bg-lightgray"
        classes="detailInfo-01"
      >
        <DetailInfo2 classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white" classes="detailInfo-01">
        <DetailInfo1 classes={`${commonClasses} padding-all`} />
      </CustomSection>
    </>
  );
};
