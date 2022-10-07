import Swal from "sweetalert2";

export const swalAlert = (variant = "success", title, customClass = "", timer = 1500) => {
  Swal.fire({
    position: 'center',
    icon: variant,
    title: title,
    showConfirmButton: false,
    timer: timer,
    customClass: {
      title: customClass
    }
  })
}
