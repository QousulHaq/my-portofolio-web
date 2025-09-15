import React from 'react'
import { FrasurbaneArrow } from "@/components/icons/arrow";

const CtaButton = ({ buttonText }: { buttonText: string }) => {
    return (
        <div className="button bg-earth-light-green px-3 py-2 rounded-full flex justify-center items-center gap-2.5 w-fit">
            <div className="arrow-container bg-earth-brown rounded-full px-2.5 py-3">
                <FrasurbaneArrow className="-rotate-45" />
            </div>
            <p className="text-earth-dark-green text-xl font-semibold leading-6">{buttonText}</p>
        </div>
    )
}

export default CtaButton