import React from 'react'

export type IconProps = React.ComponentProps<"svg"> & {
    color?: string;
};

export const UpRightArrow = ({
    color = "white",
    ...props
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right" {...props}>
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    )
}

export const FrasurbaneArrow = ({
    color = "white",
    ...props
}: IconProps) => {
    return (
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.8342 0.928223C12.8342 1.9788 13.0366 3.01909 13.4299 3.98969C13.8232 4.96029 14.3997 5.84221 15.1264 6.58508C15.8531 7.32794 16.7159 7.91722 17.6654 8.31926C18.6149 8.7213 19.6325 8.92822 20.6603 8.92822M20.6603 8.92822C19.6325 8.92822 18.6149 9.13515 17.6654 9.53718C16.7159 9.93922 15.8531 10.5285 15.1264 11.2714C14.3997 12.0142 13.8232 12.8961 13.4299 13.8668C13.0366 14.8374 12.8342 15.8776 12.8342 16.9282M20.6603 8.92822L0.660278 8.92819" stroke={color} strokeWidth="2" />
        </svg>
    )
}