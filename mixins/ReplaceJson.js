const ReplaceJson = ({
    replace(value) {
        if (!value) {
            return ""
        }

        return value.replace(/_/g, ".").replace(/\^/g, "/");
    }
});

export default ReplaceJson;
