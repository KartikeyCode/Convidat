export default function Stats() {
    return (
        <div className="min-h-[40rem] flex flex-col items-center bg-cover bg-center justify-center xl:px-28 xl:py-28" style={{ backgroundImage: 'url(/stat.png)' }}>
            <h1 className="text-white md:text-4xl text-2xl text-center 2xl:text-5xl font-normal"> Create, connect and grow with our supportive community. </h1>
            <h1 className="text-white md:text-4xl text-2xl  font-light text-center mt-16 xl:w-[60rem]"> We believe that the future of modern economics lies in collaborative and cooperative cultural spaces. </h1>
            <div className="flex gap-16 mt-40 items-center">
                <div className="flex flex-col gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="54" viewBox="0 0 68 54" fill="none">
                        <path d="M15.8721 52.397C15.8866 52.4066 15.9059 52.4018 15.9204 52.4115C16.0344 52.4749 16.1619 52.5102 16.2923 52.5145C16.3641 52.5143 16.4356 52.5046 16.5048 52.4855L34.0004 47.7108L51.496 52.4855C51.5652 52.5046 51.6367 52.5143 51.7085 52.5145C51.8387 52.5106 51.9658 52.4746 52.0788 52.4098C52.0949 52.4018 52.1126 52.405 52.1271 52.3954L66.6155 43.5413C66.7652 43.4494 66.8808 43.3112 66.9447 43.1476C67.0086 42.984 67.0174 42.804 66.9697 42.635L58.9463 14.463C58.9135 14.3457 58.8544 14.2373 58.7735 14.1462C58.6926 14.0551 58.5921 13.9835 58.4795 13.937C58.3669 13.8905 58.2452 13.8702 58.1236 13.8776C58.002 13.8851 57.8836 13.9201 57.7776 13.98L49.7896 18.4618C49.6147 18.5722 49.4889 18.7457 49.4382 18.9463C49.3875 19.1468 49.4159 19.3592 49.5174 19.5395C49.6189 19.7198 49.7858 19.8541 49.9836 19.9148C50.1813 19.9755 50.3949 19.9579 50.58 19.8656L57.6778 15.8812L65.2552 42.4853L52.3524 50.3718L49.2873 25.8525C49.2609 25.6405 49.1513 25.4478 48.9827 25.3166C48.814 25.1854 48.6002 25.1266 48.3882 25.153C48.1763 25.1795 47.9835 25.2891 47.8523 25.4577C47.7211 25.6263 47.6623 25.8402 47.6888 26.0521L50.7587 50.6165L34.8053 46.2619V41.8671C34.8053 41.6536 34.7205 41.4489 34.5696 41.2979C34.4186 41.147 34.2139 41.0622 34.0004 41.0622C33.7869 41.0622 33.5822 41.147 33.4313 41.2979C33.2803 41.4489 33.1955 41.6536 33.1955 41.8671V46.2619L17.2405 50.6165L20.3104 26.0521C20.3235 25.9472 20.3158 25.8407 20.2878 25.7387C20.2597 25.6367 20.2119 25.5412 20.1469 25.4577C20.082 25.3742 20.0012 25.3044 19.9092 25.2521C19.8173 25.1998 19.7159 25.1662 19.611 25.153C19.506 25.1399 19.3995 25.1476 19.2975 25.1757C19.1955 25.2038 19.1 25.2516 19.0166 25.3166C18.9331 25.3815 18.8632 25.4623 18.8109 25.5542C18.7586 25.6462 18.725 25.7476 18.7119 25.8525L15.6484 50.3718L2.7456 42.4869L10.3231 15.8845L17.4208 19.8688C17.6059 19.9611 17.8195 19.9787 18.0173 19.918C18.215 19.8574 18.3819 19.723 18.4834 19.5427C18.5849 19.3624 18.6133 19.1501 18.5626 18.9495C18.512 18.7489 18.3862 18.5755 18.2112 18.465L10.2216 13.9816C10.1158 13.9211 9.99752 13.8855 9.87583 13.8777C9.75413 13.8699 9.63227 13.8901 9.51959 13.9368C9.40691 13.9834 9.30641 14.0552 9.22579 14.1467C9.14518 14.2382 9.08659 14.3469 9.05452 14.4646L1.03114 42.6366C0.98261 42.8056 0.990989 42.9859 1.05499 43.1496C1.11898 43.3134 1.23504 43.4516 1.3853 43.5429L15.8721 52.397Z" fill="#F66E1A" stroke="#F66E1A" stroke-width="2" />
                        <path d="M33.4547 38.6185C33.6024 38.7549 33.7959 38.831 33.997 38.8319C34.1982 38.8328 34.3923 38.7584 34.5413 38.6233C35.0774 38.1355 47.6839 26.5673 47.6839 14.6835C47.6839 7.00949 41.6744 1 34.0004 1C26.3264 1 20.3169 7.00949 20.3169 14.6835C20.3169 26.3612 32.9186 38.1226 33.4547 38.6185ZM34.0004 2.60983C40.8824 2.60983 46.0741 7.79991 46.0741 14.6835C46.0741 24.4987 36.4264 34.544 34.0052 36.9104C31.5889 34.5166 21.9267 24.3393 21.9267 14.6835C21.9267 7.79991 27.1184 2.60983 34.0004 2.60983Z" fill="#F66E1A" stroke="#F66E1A" stroke-width="2" />
                        <path d="M41.2446 14.6836C41.2446 10.6896 37.9944 7.43933 34.0004 7.43933C30.0064 7.43933 26.7562 10.6896 26.7562 14.6836C26.7562 18.6775 30.0064 21.9278 34.0004 21.9278C37.9944 21.9278 41.2446 18.6775 41.2446 14.6836ZM34.0004 20.318C30.8935 20.318 28.366 17.7905 28.366 14.6836C28.366 11.5766 30.8935 9.04916 34.0004 9.04916C37.1074 9.04916 39.6348 11.5766 39.6348 14.6836C39.6348 17.7905 37.1074 20.318 34.0004 20.318Z" fill="#F66E1A" stroke="#F66E1A" stroke-width="2" />
                    </svg>
                    <h2 className="text-white font-Inter text-base font-extralight"> 15+ Locations </h2>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="49" viewBox="0 0 60 49" fill="none">
                        <path d="M10.9091 49C10.1364 49 9.48909 48.7387 8.96727 48.216C8.44545 47.6933 8.18364 47.0472 8.18182 46.2778V43.5555C5.90909 43.5555 3.97727 42.7616 2.38636 41.1736C0.795455 39.5856 0 37.6574 0 35.3889V21.7778C0 19.5093 0.795455 17.581 2.38636 15.9931C3.97727 14.4051 5.90909 13.6111 8.18182 13.6111V8.16667C8.18182 5.89815 8.97727 3.96991 10.5682 2.38194C12.1591 0.793981 14.0909 0 16.3636 0H43.6364C45.9091 0 47.8409 0.793981 49.4318 2.38194C51.0227 3.96991 51.8182 5.89815 51.8182 8.16667V13.6111C54.0909 13.6111 56.0227 14.4051 57.6136 15.9931C59.2045 17.581 60 19.5093 60 21.7778V35.3889C60 37.6574 59.2045 39.5856 57.6136 41.1736C56.0227 42.7616 54.0909 43.5555 51.8182 43.5555V46.2778C51.8182 47.0491 51.5564 47.696 51.0327 48.2187C50.5091 48.7414 49.8618 49.0018 49.0909 49C48.32 48.9982 47.6727 48.7368 47.1491 48.216C46.6255 47.6951 46.3636 47.0491 46.3636 46.2778V43.5555H13.6364V46.2778C13.6364 47.0491 13.3745 47.696 12.8509 48.2187C12.3273 48.7414 11.68 49.0018 10.9091 49ZM8.18182 38.1111H51.8182C52.5909 38.1111 53.2391 37.8498 53.7627 37.3271C54.2864 36.8044 54.5473 36.1584 54.5455 35.3889V21.7778C54.5455 21.0065 54.2836 20.3604 53.76 19.8396C53.2364 19.3187 52.5891 19.0574 51.8182 19.0556C51.0473 19.0537 50.4 19.3151 49.8764 19.8396C49.3527 20.364 49.0909 21.0101 49.0909 21.7778V32.6667H10.9091V21.7778C10.9091 21.0065 10.6473 20.3604 10.1236 19.8396C9.6 19.3187 8.95273 19.0574 8.18182 19.0556C7.41091 19.0537 6.76364 19.3151 6.24 19.8396C5.71636 20.364 5.45455 21.0101 5.45455 21.7778V35.3889C5.45455 36.1602 5.71636 36.8072 6.24 37.3298C6.76364 37.8525 7.41091 38.1129 8.18182 38.1111ZM16.3636 27.2222H43.6364V21.7778C43.6364 20.5528 43.8864 19.4412 44.3864 18.4431C44.8864 17.4449 45.5455 16.5602 46.3636 15.7889V8.16667C46.3636 7.39537 46.1018 6.7493 45.5782 6.22844C45.0545 5.70759 44.4073 5.44626 43.6364 5.44444H16.3636C15.5909 5.44444 14.9436 5.70578 14.4218 6.22844C13.9 6.75111 13.6382 7.39718 13.6364 8.16667V15.7889C14.4545 16.5602 15.1136 17.4449 15.6136 18.4431C16.1136 19.4412 16.3636 20.5528 16.3636 21.7778V27.2222Z" fill="#F66E1A" />
                    </svg>
                    <h2 className="text-white font-Inter text-base font-extralight"> 45,000 Square Feet Area </h2>
                </div>
            </div>
        </div>
    )
}