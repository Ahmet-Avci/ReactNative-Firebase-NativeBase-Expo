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
        //TODO : to be corrected later or not to be. that's the whole point
        setTimeout(() => {
            if (window && window.document && window.document.querySelectorAll) {
                const query = "div[style='align-self: flex-start; border-color: rgb(255, 0, 0); border-width: 1px;']";
                const elm = window.document.querySelectorAll(query)[0];
                if (elm && elm.style)
                    window.document.querySelectorAll(query)[0].style.opacity = 0;
            }
        }, 1000);
    }
});

export default ToastMessage;
