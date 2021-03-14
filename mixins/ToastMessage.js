import { Toast } from "native-base";
const ToastMessage = ({
    showTestResult(detailState, score) {
        Toast.show({
            text: `Doğru sayısı: ${detailState.totalTrue}\nYanlış sayısı: ${detailState.totalFalse}\nPuanınız: ${score}`,
            duration: 60000,
            buttonText: "Anladım",
            type: score > 70 ? "success" : "danger",
            onClose: () => {
                this.props.navigation.navigate('Links');
            }
        })
    },
    clearToastSquare() {
        // TODO : to be corrected later or not to be. that's the whole point
        setTimeout(() => {
            window.document.querySelectorAll("div[style='align-self: flex-start; border-color: rgb(255, 0, 0); border-width: 1px;']")[0].style.opacity = 0;
        }, 100);
    }
});

export default ToastMessage;
