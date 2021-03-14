const Guid = ({
    NewRandom() {
        return Math.random(0, 10).toString().substr(2);
    }
})

export default Guid;
