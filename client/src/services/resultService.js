import Api from "@/services/api";

export default {
  result(param) {
    return Api().get("api/result", param);
  },
};
