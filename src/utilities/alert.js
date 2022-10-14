import Swal from "sweetalert2";
import globalStyle from "../global-style/style.module.css";

export const swalAlert = (variant = "success", title, timer = 1500) => {
  console.log(globalStyle.alert)
  Swal.fire({
    position: 'center',
    icon: variant,
    title: title,
    showConfirmButton: false,
    timer: timer,
    customClass: {
      title: globalStyle.alert
    }
  })
}
