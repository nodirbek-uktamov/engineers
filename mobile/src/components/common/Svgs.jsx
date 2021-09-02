import React, { Fragment } from 'react'
import Svg, { LinearGradient, Stop, Defs, G, Path, ClipPath } from 'react-native-svg'

export function ShowPassword() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75Z" fill="#AFAFB4" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M12 5.5C9.38223 5.5 7.02801 6.55139 5.33162 7.85335C4.48232 8.50519 3.78544 9.22913 3.29649 9.93368C2.81686 10.6248 2.5 11.3515 2.5 12C2.5 12.6485 2.81686 13.3752 3.29649 14.0663C3.78544 14.7709 4.48232 15.4948 5.33162 16.1466C7.02801 17.4486 9.38223 18.5 12 18.5C14.6178 18.5 16.972 17.4486 18.6684 16.1466C19.5177 15.4948 20.2146 14.7709 20.7035 14.0663C21.1831 13.3752 21.5 12.6485 21.5 12C21.5 11.3515 21.1831 10.6248 20.7035 9.93368C20.2146 9.22913 19.5177 8.50519 18.6684 7.85335C16.972 6.55139 14.6178 5.5 12 5.5ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" fill="#AFAFB4" />
        </Svg>
    )
}

export function HidePassword() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M20.5303 4.53033C20.8232 4.23744 20.8232 3.76256 20.5303 3.46967C20.2374 3.17678 19.7626 3.17678 19.4697 3.46967L3.46967 19.4697C3.17678 19.7626 3.17678 20.2374 3.46967 20.5303C3.76256 20.8232 4.23744 20.8232 4.53033 20.5303L7.56535 17.4953C8.88317 18.1032 10.3919 18.5 12 18.5C14.6178 18.5 16.972 17.4486 18.6684 16.1466C19.5177 15.4948 20.2146 14.7709 20.7035 14.0663C21.1831 13.3752 21.5 12.6485 21.5 12C21.5 11.3515 21.1831 10.6248 20.7035 9.93368C20.2146 9.22913 19.5177 8.50519 18.6684 7.85335C18.3978 7.64567 18.1104 7.44437 17.808 7.25269L20.5303 4.53033ZM15.1287 9.93196L14.0307 11.0299C14.1713 11.3237 14.25 11.6526 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C11.6526 14.25 11.3237 14.1713 11.0299 14.0307L9.93196 15.1287C10.5248 15.5213 11.2357 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 11.2357 15.5213 10.5248 15.1287 9.93196Z" fill="#282828" />
            <Path d="M12.6692 8.30953C12.753 8.32462 12.8395 8.2998 12.8997 8.2396L14.8493 6.29007C14.9816 6.15772 14.9267 5.93281 14.7464 5.88252C13.879 5.64055 12.9571 5.5 12 5.5C9.38223 5.5 7.02801 6.55139 5.33162 7.85335C4.48232 8.50519 3.78544 9.22913 3.29649 9.93368C2.81686 10.6248 2.5 11.3515 2.5 12C2.5 12.6485 2.81686 13.3752 3.29649 14.0663C3.7138 14.6676 4.28257 15.2831 4.96829 15.8558C5.06614 15.9375 5.20993 15.9294 5.30008 15.8393L8.2396 12.8997C8.2998 12.8395 8.32462 12.753 8.30953 12.6692C8.27042 12.452 8.25 12.2284 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C12.2284 8.25 12.452 8.27042 12.6692 8.30953Z" fill="#282828" />
        </Svg>
    )
}

export function BottomImage(props) {
    return (
        <Svg
            width={360}
            height={70}
            viewBox="0 0 360 58"
            preserveAspectRatio="xMinYMin slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.65}>
                <Path
                    opacity={0.65}
                    d="M-13.77 11.08l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M56.79 11.08L21.61 59.09l35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M56.55 11.08l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M127.12 11.08L91.93 59.09l35.16 10.29.03-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M126.88 11.08l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M197.44 11.08l-35.18 48.01 35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M197.21 11.08l35.37 48.01-35.39 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M267.77 11.08l-35.19 48.01 35.17 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M267.53 11.08l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M338.09 11.08l-35.18 48.01 35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M337.86 11.08l35.37 48.01-35.39 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M21.8 116.23l-35.19-48.01 35.17-10.28.02 58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M21.56 116.23l35.38-48.01-35.4-10.28.02 58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M92.12 116.23L56.94 68.22 92.1 57.94l.02 58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M91.89 116.23l35.37-48.01-35.39-10.28.02 58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M162.45 116.23l-35.19-48.01 35.17-10.28.02 58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M162.21 116.23l35.38-48.01-35.4-10.28.02 58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M232.78 116.23l-35.19-48.01 35.16-10.28.03 58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M232.54 116.23l35.38-48.01-35.4-10.28.02 58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M303.1 116.23l-35.18-48.01 35.16-10.28.02 58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M302.87 116.23l35.37-48.01-35.4-10.28.03 58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M373.43 116.23l-35.19-48.01 35.16-10.28.03 58.29zM21.73 59.16l-35.18-48.01L21.71.86l.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M21.5 59.16l35.37-48.01L21.48.86l.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M92.06 59.16L56.87 11.15 92.04.86l.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M91.82 59.16l35.38-48.01L91.8.86l.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M162.38 59.16L127.2 11.15 162.36.86l.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M162.15 59.16l35.38-48.01L162.13.86l.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M232.71 59.16l-35.18-48.01L232.69.86l.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M232.47 59.16l35.38-48.01L232.45.86l.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M303.04 59.16l-35.19-48.01L303.01.86l.03 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M302.8 59.16l35.38-48.01L302.78.86l.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M373.36 59.16l-35.18-48.01L373.34.86l.02 58.3z"
                    fill="#C9CEE0"
                />
            </G>
        </Svg>
    )
}

export function Logo(props) {
    return (
        <Svg
            width={198}
            height={59}
            viewBox="0 0 198 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M139.22.4l-35.19 48.01 35.16 10.29.03-58.3z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M139.22.4l35.37 48.01-35.4 10.29.03-58.3z"
                fill="url(#prefix__paint1_linear)"
            />
            <Path
                d="M138.98.4l35.38 48.01-35.4 10.29.02-58.3z"
                fill="url(#prefix__paint2_linear)"
            />
            <Path
                d="M130 37.4a3 3 0 01-1.69-.07l6.1 3.25c.409-1.479.618-3.006.62-4.54a14.187 14.187 0 00-.45-3.64c-.99 2.6-2.67 4.6-4.58 5z"
                fill="url(#prefix__paint3_linear)"
            />
            <Path
                d="M148.15 37.4c-1.74-.4-3.32-2.12-4.36-4.49a13.963 13.963 0 00-.34 3.13 17.18 17.18 0 00.58 4.38l5.81-3.09a2.999 2.999 0 01-1.69.07z"
                fill="url(#prefix__paint4_linear)"
            />
            <Path
                d="M129.74 26.82a4.521 4.521 0 00-.62-.13 6.231 6.231 0 00-2.94.36c-.401.142-.79.32-1.16.53-.12.778-.18 1.563-.18 2.35 0 2.89.83 5.26 2.14 6.54.126.122.26.235.4.34.225.173.47.318.73.43l.24.09c.545.185 1.132.21 1.69.07 1.87-.42 3.55-2.37 4.58-5-.81-2.99-2.62-5.01-4.88-5.58zM153.15 27.39a6.802 6.802 0 00-.8-.34 6 6 0 00-3.27-.3c-.2.04-.4.09-.6.15-2.24.72-4 2.88-4.69 6 1 2.37 2.62 4.09 4.36 4.49.558.14 1.145.115 1.69-.07l.24-.09c.261-.11.507-.255.73-.43.144-.105.28-.218.41-.34 1.3-1.28 2.14-3.65 2.14-6.54a16.492 16.492 0 00-.21-2.53z"
                fill="#fff"
            />
            <Path
                d="M10.38 31.33v16.84H4.77V31.33H.16v-4.75H15v4.75h-4.62zM31.49 31.33h-6.68v3.61h6.3v4.75h-6.3v3.73h6.68v4.75H19.2V26.58h12.29v4.75zM50.5 33.79a6 6 0 00-4.81-2.37c-.8-.01-1.593.147-2.33.46a5.568 5.568 0 00-1.85 1.24c-.526.54-.94 1.18-1.22 1.88a6.24 6.24 0 00-.44 2.34 6.34 6.34 0 00.44 2.38c.283.704.701 1.346 1.23 1.89a5.761 5.761 0 004.14 1.72A6.48 6.48 0 0050.5 41v6.64l-.57.2c-.785.286-1.59.513-2.41.68-.725.138-1.462.208-2.2.21a11.14 11.14 0 01-4.28-.84 11.29 11.29 0 01-3.61-2.38 11.761 11.761 0 01-2.51-3.64 11.68 11.68 0 010-9.16 11.268 11.268 0 012.49-3.58 11.43 11.43 0 017.95-3.19c.85 0 1.699.09 2.53.27.897.202 1.774.483 2.62.84l-.01 6.74zM60.58 34.91h8.11v-8.33h5.61v21.59h-5.61v-8.91h-8.11v8.91H55V26.58h5.61l-.03 8.33zM78.82 48.17V26.58h5.62l10.36 13.2v-13.2h5.59v21.59H94.8L84.44 35v13.2l-5.62-.03zM183.27 35.48l6.84-8.9H197l-8.56 10.22 9.36 11.37h-7.27l-7.3-9.36v9.36h-5.62V26.58h5.62l.04 8.9z"
                fill="#545E74"
            />
            <Path
                d="M127 36.47c-1.31-1.28-2.14-3.65-2.14-6.54 0-.787.06-1.572.18-2.35-3.84 2.15-6.63 7.61-6.63 13 0 5.91 3.36 10.09 7.79 9.29a8.298 8.298 0 004-2.07 15.182 15.182 0 004.27-7.22s-7.36-3.99-7.47-4.11z"
                fill="url(#prefix__paint5_linear)"
            />
            <Path
                d="M153.15 27.39c.136.84.206 1.69.21 2.54 0 2.89-.84 5.26-2.14 6.54-.13.12-7.19 4-7.19 4a14.83 14.83 0 004.91 7.87 7.915 7.915 0 003.41 1.58c4.42.8 7.79-3.38 7.79-9.29 0-5.63-2.97-11.25-6.99-13.24z"
                fill="url(#prefix__paint6_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={104.37}
                    y1={28.94}
                    x2={139.7}
                    y2={29.56}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#394356" />
                    <Stop offset={0.91} stopColor="#A0ABCA" />
                    <Stop offset={0.94} stopColor="#B5BDD5" />
                    <Stop offset={1} stopColor="#EEF0F5" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={139.19}
                    y1={29.55}
                    x2={174.59}
                    y2={29.55}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EEF0F5" />
                    <Stop offset={0.02} stopColor="#6F7589" />
                    <Stop offset={0.25} stopColor="#636674" />
                    <Stop offset={0.71} stopColor="#443E3F" />
                    <Stop offset={0.77} stopColor="#3F3837" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint2_linear"
                    x1={134.73}
                    y1={55.74}
                    x2={162.13}
                    y2={16.61}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EEF0F5" stopOpacity={0} />
                    <Stop offset={0.02} stopColor="#6F7589" />
                    <Stop offset={0.5} stopColor="#666F80" />
                    <Stop offset={0.68} stopColor="#454C5B" />
                    <Stop offset={0.77} stopColor="#303644" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint3_linear"
                    x1={134.49}
                    y1={32.34}
                    x2={131.32}
                    y2={39.12}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#31394B" />
                    <Stop offset={0.21} stopColor="#5C6881" />
                    <Stop offset={0.62} stopColor="#818DA1" />
                    <Stop offset={0.85} stopColor="#394356" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint4_linear"
                    x1={147.01}
                    y1={39.03}
                    x2={144.09}
                    y2={32.76}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#31394B" />
                    <Stop offset={0.43} stopColor="#687691" />
                    <Stop offset={0.59} stopColor="#57637B" />
                    <Stop offset={0.85} stopColor="#394356" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint5_linear"
                    x1={129.46}
                    y1={48.59}
                    x2={120.62}
                    y2={29.63}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#31394B" />
                    <Stop offset={0.21} stopColor="#5C6881" />
                    <Stop offset={0.45} stopColor="#475267" />
                    <Stop offset={0.62} stopColor="#82839A" />
                    <Stop offset={0.7} stopColor="#A0ABCA" />
                    <Stop offset={0.73} stopColor="#8E98B5" />
                    <Stop offset={0.8} stopColor="#5E6980" />
                    <Stop offset={0.85} stopColor="#394356" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint6_linear"
                    x1={3992.23}
                    y1={2665.6}
                    x2={3752.58}
                    y2={3031.51}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#31394B" />
                    <Stop offset={0.21} stopColor="#5C6881" />
                    <Stop offset={0.45} stopColor="#475267" />
                    <Stop offset={0.62} stopColor="#82839A" />
                    <Stop offset={0.7} stopColor="#A0ABCA" />
                    <Stop offset={0.73} stopColor="#8E98B5" />
                    <Stop offset={0.8} stopColor="#5E6980" />
                    <Stop offset={0.85} stopColor="#394356" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export function TopImage(props) {
    return (
        <Svg
            width={360}
            height={70}
            viewBox="0 0 360 58"
            preserveAspectRatio="yMin slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.65}>
                <Path
                    opacity={0.65}
                    d="M-13.77 46.92L21.61-1.09l-35.4-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M56.79 46.92L21.61-1.09l35.16-10.29.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M56.55 46.92L91.93-1.09l-35.4-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M127.12 46.92L91.93-1.09l35.16-10.29.03 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M126.88 46.92l35.38-48.01-35.4-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M197.44 46.92L162.26-1.09l35.16-10.29.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M197.21 46.92l35.37-48.01-35.39-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M267.77 46.92L232.58-1.09l35.17-10.29.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M267.53 46.92l35.38-48.01-35.4-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M338.09 46.92L302.91-1.09l35.16-10.29.02 58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M337.86 46.92l35.37-48.01-35.39-10.29.02 58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M21.8-58.23l-35.19 48.01L21.78.06l.02-58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M21.56-58.23l35.38 48.01L21.54.06l.02-58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M92.12-58.23L56.94-10.22 92.1.06l.02-58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M91.89-58.23l35.37 48.01L91.87.06l.02-58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M162.45-58.23l-35.19 48.01L162.43.06l.02-58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M162.21-58.23l35.38 48.01L162.19.06l.02-58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M232.78-58.23l-35.19 48.01L232.75.06l.03-58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M232.54-58.23l35.38 48.01L232.52.06l.02-58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M303.1-58.23l-35.18 48.01L303.08.06l.02-58.29z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M302.87-58.23l35.37 48.01L302.84.06l.03-58.29z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M373.43-58.23l-35.19 48.01L373.4.06l.03-58.29zM21.73-1.16l-35.18 48.01 35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M21.5-1.16l35.37 48.01-35.39 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M92.06-1.16L56.87 46.85l35.17 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M91.82-1.16l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M162.38-1.16L127.2 46.85l35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M162.15-1.16l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M232.71-1.16l-35.18 48.01 35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M232.47-1.16l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M303.04-1.16l-35.19 48.01 35.16 10.29.03-58.3z"
                    fill="#C9CEE0"
                />
                <Path
                    opacity={0.65}
                    d="M302.8-1.16l35.38 48.01-35.4 10.29.02-58.3z"
                    fill="#97A1BF"
                />
                <Path
                    opacity={0.65}
                    d="M373.36-1.16l-35.18 48.01 35.16 10.29.02-58.3z"
                    fill="#C9CEE0"
                />
            </G>
        </Svg>
    )
}

export function ChevronLeft(props) {
    return (
        <Svg
            width={30}
            height={35}
            viewBox="0 0 19 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.8 12.61l16.01 11.74 1.47-5.05-9.11-6.68-8.37-.01z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M18.28 5.89L16.81.81.8 12.61h8.36l9.12-6.72z"
                fill="url(#prefix__paint1_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={9.4}
                    y1={24.22}
                    x2={9.6}
                    y2={12.43}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#394356" />
                    <Stop offset={0.91} stopColor="#A0ABCA" />
                    <Stop offset={0.94} stopColor="#B5BDD5" />
                    <Stop offset={1} stopColor="#EEF0F5" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={19.25}
                    y1={14.02}
                    x2={6.2}
                    y2={4.88}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EEF0F5" stopOpacity={0} />
                    <Stop offset={0.02} stopColor="#6F7589" />
                    <Stop offset={0.5} stopColor="#666F80" />
                    <Stop offset={0.68} stopColor="#454C5B" />
                    <Stop offset={0.77} stopColor="#303644" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export function ChevronRight(props) {
    return (
        <Svg
            width={30}
            height={35}
            viewBox="0 0 18 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.48 12.61L1.47 24.35 0 19.3l9.11-6.68 8.37-.01z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M0 5.89L1.47.81l16.01 11.8H9.12L0 5.89z"
                fill="url(#prefix__paint1_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={8.88}
                    y1={24.22}
                    x2={8.68}
                    y2={12.43}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#394356" />
                    <Stop offset={0.91} stopColor="#A0ABCA" />
                    <Stop offset={0.94} stopColor="#B5BDD5" />
                    <Stop offset={1} stopColor="#EEF0F5" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={-0.97}
                    y1={14.02}
                    x2={12.08}
                    y2={4.88}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EEF0F5" stopOpacity={0} />
                    <Stop offset={0.02} stopColor="#6F7589" />
                    <Stop offset={0.5} stopColor="#666F80" />
                    <Stop offset={0.68} stopColor="#454C5B" />
                    <Stop offset={0.77} stopColor="#303644" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export function NotificationBell(props) {
    return (
        <Fragment>
            <Svg
                width={40}
                height={40}
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M19.88 18.34a4 4 0 01-1.36-3V11a5.076 5.076 0 01-.68 0 4.66 4.66 0 01-3.2-8 7.62 7.62 0 00-2-.78v-.18a1.821 1.821 0 00-3.64 0 2.11 2.11 0 000 .25 7.58 7.58 0 00-5.64 7.32v5.44a4 4 0 01-1.47 3.08l-.2.17A3.859 3.859 0 00.35 21h20.82a3.89 3.89 0 00-1.29-2.66z"
                    fill="#97A1BF"
                />
            </Svg>

            <Svg
                width="100%"
                height={8}
                viewBox="0 0 7 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M3.76 3.61a3.06 3.06 0 003.06-3H.71a3.06 3.06 0 003.05 3z"
                    fill="#97A1BF"
                />
            </Svg>
        </Fragment>
    )
}

export function OrdersInMap(props) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 29 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.67 2a4.9 4.9 0 014.94 4.83 5 5 0 01-10 0 4.93 4.93 0 015-4.83h.06zM4.45 13h4c.22.33.33.66.53 1H4.45a.81.81 0 00-.53.23c-.11.1-.21.1-.21.22l-1.84 9.76c0 .1.12.1.12.1s.1.11.21.11h22.47c.21 0 .32 0 .43-.11a.29.29 0 00.2-.32l1.84-9.66v-.21a.38.38 0 01-.33-.12h-6.56c.235-.3.417-.639.54-1H27c.29.06.552.21.75.43.22.201.37.468.43.76v.22l-1.83 9.76a2.31 2.31 0 01-.64 1 1.79 1.79 0 01-1.07.33H2a1.78 1.78 0 01-.76-.43 1.22 1.22 0 01-.32-.86V24l1.72-9.66a1.55 1.55 0 01.64-1 2.16 2.16 0 011.18-.33L4.45 13zM21 6.75c0 3.44-6.34 13.53-6.34 13.53S8.21 10.19 8.21 6.75a6.4 6.4 0 0112.79 0z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function Camera(props) {
    return (
        <Svg
            width={70}
            height={70}
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.2 46.4c12.813 0 23.2-10.387 23.2-23.2C46.4 10.387 36.013 0 23.2 0 10.387 0 0 10.387 0 23.2c0 12.813 10.387 23.2 23.2 23.2z"
                fill="#97A1BF"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.64 13.4h5.93l2.034 2H34.5a2.22 2.22 0 012.17 2.29v3h-7a.19.19 0 01-.12-.07 5.28 5.28 0 00-3.67-1.48 5.27 5.27 0 00-2 .42 5.07 5.07 0 00-1.68 1.09.19.19 0 01-.12.07H9.74v-3a2.25 2.25 0 012.2-2.32h.666l2.034-2zm22.03 17.17v-9.29l-6.58-.03c.22.335.413.686.58 1.05.271.65.41 1.346.41 2.05a5.2 5.2 0 01-1.52 3.67 5.108 5.108 0 01-1.79 1.02 5.08 5.08 0 01-4 0l-.22-.1h-.12a5.27 5.27 0 01-.64-.4l-.1-.07-.09-.08-.14-.12c-.024-.02-.054-.042-.085-.063-.071-.05-.145-.1-.145-.157 0-.03-.12-.09-.12-.09a.459.459 0 00-.16-.14v-.09c0-.03-.19-.1-.19-.1a.139.139 0 000-.11c-.037-.053-.063-.108-.09-.165-.023-.051-.047-.103-.08-.155a.581.581 0 01-.16-.29 2.133 2.133 0 01-.29-.53c-.018-.043-.042-.083-.066-.122-.043-.072-.084-.14-.084-.218a.524.524 0 01-.06-.13.535.535 0 00-.07-.12 1.752 1.752 0 00-.06-.38v-.06a.589.589 0 000-.13 6.019 6.019 0 01-.07-.85v-.65c.063-.477.188-.944.37-1.39.17-.362.364-.713.58-1.05H9.74v9.29a2.29 2.29 0 002.3 2.35H34.4a2.27 2.27 0 002.27-2.35zm-6.91-6.18v.3a3.9 3.9 0 01-2.87 3.47h-.33c-.145.03-.292.05-.44.06h-.25a3.9 3.9 0 01-3.89-3.6v-.3a2.615 2.615 0 010-.28 3.919 3.919 0 01.43-1.53v-.05s.07-.09.07-.14c0 0 .06-.09.09-.13l.06-.09c.217-.308.476-.584.77-.82.248-.2.52-.368.81-.5a3.869 3.869 0 013.26 0h.11c.25.121.486.272.7.45.293.233.55.51.76.82v.09a.28.28 0 01.07.13c.121 0 .111.04.1.083-.005.02-.01.04 0 .057.011.019.014.024.013.025h-.002c-.003 0-.01 0-.01.025.256.472.41.994.45 1.53.09.21.1.31.1.4z"
                fill="#fff"
            />
            <Path
                d="M11.8 23.85a.72.72 0 100-1.44.72.72 0 000 1.44z"
                fill="#38929A"
            />
        </Svg>
    )
}

export function Map(props) {
    return (
        <Svg
            width={30}
            height={35}
            viewBox="0 0 21 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.08 25.61l6.25 2V11.12l-.77-.17a50.845 50.845 0 01-5.26 7.83l-.22.12v6.71zm-6.87 1.93l6.12-2v-5.59c-2.79-1.93-4.41-4.5-6.12-7.4v14.99zm5.69-23a2.41 2.41 0 11-2.34 2.41 2.38 2.38 0 012.36-2.36l-.02-.05zm6.24 1.81a6.18 6.18 0 10-12.36 0v.6c0 3.22 6.12 10.74 6.12 10.74s6.24-7.52 6.24-10.74h-.11c.08-.172.118-.36.11-.55v-.05zm-12.79 4.6L0 8.95v16.53l6.35 2.14V10.95z"
                fill="#43BD46"
            />
            <Path
                d="M12.96 0a6.81 6.81 0 00-6.83 6.8 6.9 6.9 0 00.81 3.23l1.12 1.53 4.88 6.66V6.88L12.96 0z"
                fill="#C9CEE0"
            />
            <Path
                d="M12.94 0v18.21l4.85-6.58 1.18-1.6c.203-.387.37-.792.5-1.21A6.849 6.849 0 0012.94 0z"
                fill="#97A1BF"
            />
            <Path
                d="M12.96 11.62a4.73 4.73 0 100-9.46 4.73 4.73 0 000 9.46z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function Description(props) {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23 1.09v4.214c0 .28-.11.547-.304.745a1.03 1.03 0 01-.734.309h-4.15a1.026 1.026 0 01-.585-.158 1.049 1.049 0 01-.399-.463 1.068 1.068 0 01.196-1.16l.903-.906a10.333 10.333 0 00-5.957-1.48c-2.087.122-4.09.877-5.75 2.166a10.615 10.615 0 00-3.566 5.066 10.774 10.774 0 00-.154 6.225c.075.271.042.562-.093.808a1.049 1.049 0 01-.628.504 1.032 1.032 0 01-.795-.095 1.06 1.06 0 01-.497-.637C-2.625 4.925 9.824-4.334 19.441 2.133l1.733-1.79A1.023 1.023 0 0122.317.1c.192.08.357.218.471.395.114.177.174.384.17.596H23z"
                fill="#C9CEE0"
            />
            <Path
                d="M5.556 22.864l-1.773 1.801a1.031 1.031 0 01-1.14.222 1.04 1.04 0 01-.469-.39 1.065 1.065 0 01-.174-.59v-4.213c0-.28.11-.547.304-.745.194-.197.458-.308.733-.308h4.147c.207-.001.409.06.58.177.172.116.306.282.384.476a1.068 1.068 0 01-.217 1.158l-.902.906a10.324 10.324 0 005.978 1.52 10.354 10.354 0 005.782-2.168 10.614 10.614 0 003.574-5.1c.66-2.026.703-4.207.125-6.258a1.078 1.078 0 01.357-1.123 1.04 1.04 0 01.77-.222 1.033 1.033 0 01.698.396c.085.11.149.235.186.37 3.162 11.321-9.3 20.558-18.943 14.091z"
                fill="#97A1BF"
            />
            <Path
                d="M18 18H7v-1.674a4.852 4.852 0 01.93-2.841 4.893 4.893 0 012.424-1.766 3.244 3.244 0 01-.917-3.602 3.262 3.262 0 011.201-1.536 3.289 3.289 0 013.735 0c.548.378.968.914 1.202 1.536a3.244 3.244 0 01-.918 3.602c.973.322 1.82.94 2.42 1.767.6.827.923 1.82.923 2.84V18z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function Respond(props) {
    return (
        <Svg
            width={60}
            height={50}
            viewBox="0 0 23 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.177 28.65l8.08-12.3a10 10 0 001.73-5.55 9.81 9.81 0 00-19.62 0 10.18 10.18 0 001.72 5.55l8.09 12.3z"
                fill="#E1E5EF"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.177 0a11.18 11.18 0 019.25 17.47l-9.25 14.05-9.24-14.05A11.18 11.18 0 0111.177 0zm0 7.53a3.33 3.33 0 11.02 6.66 3.33 3.33 0 01-.02-6.66zm0 7.85a3.34 3.34 0 013.34 3.32v3.24l3.84-5.83a9 9 0 001.5-4.88 8.7 8.7 0 10-17.4 0 9 9 0 001.52 4.93l3.85 5.83v-3.24a3.34 3.34 0 013.35-3.37z"
                fill="#43BD46"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.178 0a11.18 11.18 0 019.25 17.47l-9.25 14.05V15.38a3.34 3.34 0 013.34 3.32v3.24l3.84-5.83a9 9 0 001.5-4.88 8.71 8.71 0 00-8.71-8.7V.05l.03-.05zm0 14.23v-6.7a3.35 3.35 0 010 6.7z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function CreateOrder(props) {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.36 18.45v-17a.86.86 0 00-.85-.85H1.22a.86.86 0 00-.85.85v17A2.55 2.55 0 002.92 21h15.31a4.2 4.2 0 01-.87-2.55zM2.92 3.15H8v5.1H2.92v-5.1zM14.81 15.9H2.92v-1.7h11.89v1.7zm0-3.4H2.92v-1.7h11.89v1.7zm0-4.25h-5.1v-1.7h5.1v1.7zm0-3.4h-5.1v-1.7h5.1v1.7z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function Location(props) {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M17.39 1L0 8.05l8.43 1.91L17.39 1z"
                    fill="url(#prefix__paint0_linear)"
                />
                <Path
                    d="M17.39 1l-7.06 17.38-1.9-8.42L17.39 1z"
                    fill="url(#prefix__paint1_linear)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={8.22}
                    y1={11.54}
                    x2={8.663}
                    y2={0.866}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#394356" />
                    <Stop offset={0.633} stopColor="#A0ABCA" />
                    <Stop offset={1} stopColor="#EEF0F5" />
                    <Stop offset={1} stopColor="#B5BDD5" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={7.7}
                    y1={16.98}
                    x2={17.083}
                    y2={1.332}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EEF0F5" stopOpacity={0} />
                    <Stop offset={0.02} stopColor="#6F7589" />
                    <Stop offset={0.5} stopColor="#666F80" />
                    <Stop offset={0.68} stopColor="#454C5B" />
                    <Stop offset={0.77} stopColor="#303644" />
                    <Stop offset={0.85} stopColor="#303644" />
                </LinearGradient>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h18v18H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export function Marker(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="#000"
            viewBox="0 0 45.354 45.354"
            {...props}
        >
            <Path d="M22.677 0C12.509 0 4.266 8.243 4.266 18.411c0 9.224 11.471 21.36 16.305 26.065a3.088 3.088 0 004.263.047c4.863-4.533 16.254-16.211 16.254-26.113C41.087 8.243 32.845 0 22.677 0zm0 24.393c-4.204 0-7.61-3.406-7.61-7.609a7.61 7.61 0 1115.218 0 7.607 7.607 0 01-7.608 7.609z" />
        </Svg>
    )
}

export function Clock(props) {
    return (
        <Svg
            width={60}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.109 0A12 12 0 1024 12 12.02 12.02 0 0012.109 0z"
                fill="#97A1BF"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.11 22.762A10.78 10.78 0 1122.81 12 10.771 10.771 0 0112.11 22.76z"
                fill="#FEFEFE"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.677 11.535a.377.377 0 00-.426-.387h-2.14a.356.356 0 00-.387.387.387.387 0 00.387.386h2.14a.405.405 0 00.426-.386zM19.392 11.535a.378.378 0 00.397.386h2.13a.367.367 0 00.387-.386.338.338 0 00-.387-.387h-2.13a.347.347 0 00-.397.387zM12.109 4.618a.367.367 0 00.386-.386v-2.14a.396.396 0 00-.386-.387.426.426 0 00-.426.386v2.14a.396.396 0 00.426.387zM12.109 19.343a.416.416 0 00-.426.387v2.14a.426.426 0 00.426.426.407.407 0 00.386-.426v-2.14a.386.386 0 00-.386-.387zM4.757 7.264a.466.466 0 01-.506.495.476.476 0 01-.321-.817.495.495 0 01.321-.144.486.486 0 01.506.466zM20.72 7.264a.475.475 0 01-.465.495.446.446 0 01-.466-.495.466.466 0 01.465-.466.476.476 0 01.466.466zM7.779 3.647a.456.456 0 01-.466.426.476.476 0 01-.505-.426.486.486 0 01.505-.466.476.476 0 01.466.466zM17.262 3.647a.465.465 0 01-.466.426.456.456 0 01-.466-.426.475.475 0 01.466-.466.476.476 0 01.466.466zM4.796 16.698a.505.505 0 01-.465.465.466.466 0 01-.466-.465.446.446 0 01.466-.466.476.476 0 01.465.466zM20.76 16.698a.475.475 0 01-.466.465.466.466 0 01-.466-.465.445.445 0 01.466-.466.457.457 0 01.466.466zM7.818 20.314a.505.505 0 01-.465.506.488.488 0 01-.327-.832.475.475 0 01.327-.14.495.495 0 01.465.466zM17.341 20.314a.525.525 0 01-.505.506.488.488 0 01-.436-.318.484.484 0 01-.03-.188.466.466 0 01.466-.465.506.506 0 01.506.465zM10.81 12a4.137 4.137 0 00-.465-.465 5.603 5.603 0 00-.386-.506l-.198-.277-.228-.228-.199-.317a2.42 2.42 0 01-.227-.228 6.51 6.51 0 00-.357-.545 5.362 5.362 0 00-.347-.585c.228.043.45.109.664.199.2.107.409.197.624.267.079.07.17.123.268.159.119.079.198.079.307.158l.277.149.268.158c.238.12.426.238.624.347.162.128.33.248.505.357 0 0 .16.07.189.109.277-.307.545-.654.822-.991.506-.515.991-1.05 1.516-1.595l.852-.744.387-.386c.149-.093.291-.195.426-.307.137-.142.294-.262.466-.357l.466-.347c.147-.114.303-.216.465-.307.176-.094.344-.2.506-.317-.08.198-.11.396-.189.585-.079.188-.158.346-.237.505l-.228.545c-.115.149-.221.304-.317.466a3.114 3.114 0 01-.268.505 2.584 2.584 0 00-.238.466c-.228.307-.426.624-.654.931-.426.585-.892 1.17-1.328 1.754-.436.585-.99 1.12-1.437 1.625l-.772.783-.664-.664c-.307-.267-.575-.584-.892-.892V12z"
                fill="#43BD46"
            />
        </Svg>
    )
}

export function Reviews(props) {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.498 29.08l-6.949-6.95A13.72 13.72 0 0013.285.007 13.713 13.713 0 00.007 13.289a13.72 13.72 0 0012.42 14.088 13.712 13.712 0 009.698-2.822l6.948 6.951a1.735 1.735 0 002.425 0 1.715 1.715 0 000-2.425zM2.343 13.75A11.417 11.417 0 019.395 3.21a11.41 11.41 0 0115.554 8.326 11.418 11.418 0 01-11.193 13.638A11.42 11.42 0 012.343 13.75z"
                fill="#43BD46"
            />
            <Path
                d="M21.934 12.872l-1.35 4.403a.983.983 0 01-.404.533c-.198.132-.44.199-.685.191H11v-6.605l3.997-4.022c.108-.116.243-.21.395-.274.152-.064.319-.097.487-.098.305-.004.601.094.83.274.23.181.376.432.412.705v3.386h3.267c1.056.029 1.851.587 1.546 1.507zM9 18H6v-6h3v6z"
                fill="#43BD46"
            />
        </Svg>
    )
}
