import { SiteTitle } from "@/Config/Config";
import { GET_APK_LINK } from "../service/admin.service";
SiteTitle

export const downloadAPK = async () => {
  const res = await GET_APK_LINK();
  if (res.status) {
    const link = document.createElement("a");
    link.href = res.appInfo;
    link.setAttribute("download", `${SiteTitle}.apk`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } else {
    alert("App is Under Maintainance, Please Try Again After Sometime");
    return;
  }
};
