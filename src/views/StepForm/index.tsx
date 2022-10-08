import { Button, message, Steps } from "antd"
import React, { useState } from "react";
import "./index.scss"

const { Step } = Steps

const steps = [
    {
        title: "步骤一",
        content: "第一步"
    },
    {
        title: "步骤二",
        content: "第二步"
    },
    {
        title: "步骤三",
        content: "第三步"
    }
]
//FC function
const StepForm: React.FC = () => {

    // react Hooks

    const [current, setCurrent] = useState(0)

    // 下一步
    const nextStep = () => {
        setCurrent(oldValue => oldValue + 1)
    }

    // 上一步
    const prevStep = () => {
        setCurrent(oldValue => oldValue - 1)
    }

    return (
        <div className="step-from">
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title}></Step>
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {
                    current < steps.length - 1 && (
                        <Button type="primary" onClick={nextStep}>继续</Button>
                    )
                }
                {
                    current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success("成功提交")}>提交</Button>
                    )
                }
                {
                    current > 0 && (
                        <Button onClick={prevStep}>上一步</Button>
                    )
                }

            </div>
        </div>
    )
}
export default StepForm