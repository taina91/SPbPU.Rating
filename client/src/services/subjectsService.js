import Api from "@/services/api";

export default {
  subjects(params) {
    return Api().get("api/subjects", params);
  },
};
