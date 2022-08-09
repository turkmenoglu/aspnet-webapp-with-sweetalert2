class messagebox {
    static showSuccess(title, text) {
        Swal.fire({
            title: title,
            text: text,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tamam"
        });
    }

    static showError(title, text) {
        Swal.fire({
            title: title,
            text: text,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tamam"
        });
    }

    static showWarning(title, text) {
        Swal.fire({
            title: title,
            text: text,
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tamam"
        });
    }

    static showInfo(title, text) {
        Swal.fire({
            title: title,
            text: text,
            icon: "info",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tamam"
        });
    }

    static showConfirm(title, text, confirmTitle, confirmText) {
        Swal.fire({
            title: title,
            text: text,
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Hayır",
            confirmButtonColor: "#28A745",
            confirmButtonText: "Evet"
        }).then((result) => {
            if (result.isConfirmed) {
                messagebox.showSuccess(confirmTitle, confirmText);
            }
        });
    }
}