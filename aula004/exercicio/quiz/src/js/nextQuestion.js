export const values = [];

export function next(value, setIndex, question, setAnimation, setEnableStatus) {
    setAnimation(null);
    setEnableStatus(false);

    setTimeout(() => {
        if (value === question.answer) {
            setAnimation("win");
        } else {
            setAnimation("lose");
        }

        values.push(value);
        setIndex((prev) => prev + 1);
        setEnableStatus(true);
    }, 300);
}
