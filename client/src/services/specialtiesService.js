import Api from "@/services/api";

export default {
  allInst() {
    return Api().get("api/inst");
  },
  eduLevel() {
    return Api().get("api/level");
  },
  spec(params) {
    return Api().get("api/spec", params);
  },
  oneSpec(params) {
    return Api().get("api/specId", params);
  },
};
