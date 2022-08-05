import { useState } from 'react';

const Button = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button" onClick={() => setCount(count + 1)}>いいね 🎥</button>
            <p>{count}</p>
        </div>
    );
}

export default Button;