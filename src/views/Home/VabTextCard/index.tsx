import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import "./index.scss"

const count: number = 999

const Home: React.FC = () => {

    let [countState, setCountState] = useState(0)
    useEffect(() => {
        const time = setInterval(() => {
            setCountState(oldvalue => {
                if (oldvalue < count) {
                    return oldvalue + 1
                } else {
                    console.log(time)
                    clearInterval(time)
                    return oldvalue
                }
            })
        }, 1)
        return () => clearInterval(time)
    }, [])
    return (
        <Card className="vab-card vab-text-card" bordered={false}>
            <p className="count-text">{countState}</p>
        </Card>
    )
}

export default Home