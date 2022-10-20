import { toast } from 'react-toastify';

const config = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

const alert = {
  success(title) {
    toast.success(title, {
      ...config
    });
  },
  danger(title) {
    toast.error(title, {
      ...config
    });
  }
}

export const swalAlert = (variant = "success", title) => alert[variant](title)
