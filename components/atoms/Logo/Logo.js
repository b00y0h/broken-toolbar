import PropTypes from 'prop-types'
import React from 'react'

/**
 * Render the Logo component.
 *
 * @param  {object}  props           Logo props.
 * @param  {string}  props.className Optional classname for the element.
 * @param  {Array}   props.type      Type or style of the logo.
 * @return {Element}                 The Logo component.
 */
export default function Logo ({ className, type }) {
  // prettier-ignore
  return (
    <svg
      className={className}
      fill={type === 'dark' ? '#005847' : '#f9fbfd'}
      width="216"
      height="114"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 216 114"
      xmlSpace="preserve"
    >
      <g clipPath="url(#clip0_104_2292)">
        <path d="M31.3582 0C31.6486 1.15083 32.0348 2.28928 32.2171 3.45867C32.5323 5.64254 32.3204 7.87025 31.5991 9.95528C30.6445 12.8602 29.0132 15.3629 26.9864 17.612C23.468 21.5207 20.4575 25.8594 18.0267 30.5248C14.9939 36.3155 12.8148 42.5155 11.5572 48.9318C11.0536 51.4624 10.7477 54.0363 10.445 56.604C10.2534 58.2127 10.2102 59.8399 10.136 61.461C10.0835 62.6985 10.0835 63.9359 10.065 65.1734C10.0692 65.3462 10.0826 65.5186 10.1051 65.69H10.2287C10.4079 65.0156 10.584 64.3381 10.7663 63.6637C13.3306 54.157 17.4768 45.4113 23.4736 37.5937C28.0359 31.5672 33.6456 26.4133 40.0336 22.3793C40.1263 22.3205 40.2283 22.271 40.4414 22.1534C40.6701 23.0815 40.9512 23.9261 41.0872 24.8016C41.8657 29.8473 40.2128 34.1072 36.8885 37.8505C34.3272 40.7337 31.6918 43.5706 29.3345 46.6178C25.0895 52.1028 22.2965 58.3272 20.6837 65.0744C20.3964 66.2778 20.1493 67.4905 19.8836 68.7001L20.0071 68.7527C20.0906 68.6289 20.1832 68.5114 20.2543 68.3845C22.3517 64.5678 24.8465 60.984 27.697 57.693C33.3849 51.1964 40.1232 46.1476 48.2889 43.1529C48.4094 43.1096 48.5299 43.057 48.6535 43.0137C48.6976 43.0088 48.7422 43.0088 48.7863 43.0137C49.1935 43.9367 49.4291 44.9264 49.4815 45.9341C49.7534 49.8723 48.1375 53.034 45.289 55.5831C43.877 56.8484 42.2674 57.8879 40.7442 59.0263C33.87 64.1617 29.18 70.7821 27.11 79.1782C26.6489 81.0877 26.3747 83.0376 26.2913 85.0004C26.1059 88.9138 26.7022 92.6571 28.5899 96.1127C30.8762 100.305 34.3581 103.03 39.0944 103.76C45.2395 104.707 50.1272 102.452 53.708 97.3625L53.8934 97.0995L62.4082 102.328C61.5561 103.727 60.5588 105.033 59.4329 106.223C55.7922 110.15 50.9559 112.761 45.6782 113.647C43.2824 114.04 40.8451 114.112 38.4301 113.864C33.9756 113.461 29.6327 112.243 25.6178 110.269C22.0348 108.51 18.7339 106.225 15.8239 103.491C11.34 99.2764 7.71124 94.2342 5.13711 88.6416C3.15461 84.4134 1.74265 79.94 0.938408 75.339C0.589288 73.3591 0.431721 71.3451 0.206183 69.3436C0.110407 68.5145 0.0640639 67.6823 -0.00390625 66.8501V64.0844C0.0240307 63.9913 0.0446901 63.8961 0.0578848 63.7998C0.144392 62.2251 0.193825 60.6505 0.308139 59.0882C0.447169 57.3094 0.558393 55.5213 0.836453 53.761C1.28753 50.921 1.76332 48.0842 2.39977 45.2783C3.7809 39.1254 5.87865 33.1561 8.64994 27.493C11.6195 21.3215 15.4086 15.5804 19.9145 10.4255C22.8096 7.12436 26.0171 4.11156 29.4921 1.42925C30.11 0.962117 30.6815 0.476418 31.2747 0H31.3736" />
        <path d="M62.3755 76.4898L53.9194 81.7335C49.5755 75.7504 43.8815 73.69 36.7168 75.6792C36.7283 75.5973 36.7469 75.5166 36.7724 75.4379C38.2752 71.9183 40.6861 68.8624 43.7579 66.584C44.2275 66.2251 44.728 65.9034 45.1729 65.5198C45.3145 65.3993 45.4844 65.317 45.6666 65.2807C45.8488 65.2445 46.0373 65.2554 46.2141 65.3125C49.5311 65.9616 52.6786 67.2894 55.4595 69.2126C58.2404 71.1359 60.5949 73.6133 62.3755 76.4898Z" />
        <path d="M95.6951 69.8016C96.2574 72.0043 96.8043 74.1327 97.3481 76.2797L99.0071 82.798C99.0689 82.4886 99.1122 82.2658 99.1616 82.0369C99.7486 79.4197 100.336 76.8025 100.923 74.1853C101.16 73.1335 101.407 72.0827 101.664 71.0329C101.877 70.1729 102.257 69.7955 103.116 69.7491C103.975 69.7026 104.785 69.7491 105.677 69.7491C105.716 70.3407 105.707 70.9346 105.65 71.5248C105.602 71.6843 105.523 71.8325 105.417 71.9606C105.31 72.0887 105.18 72.1941 105.032 72.2704C104.877 72.3392 104.741 72.4433 104.633 72.5743C104.526 72.7054 104.451 72.8598 104.414 73.0252C103.796 75.531 103.166 78.0358 102.523 80.5396C102.053 82.3958 101.575 84.252 101.12 86.1081C101.115 86.182 101.095 86.2541 101.06 86.3196C101.026 86.385 100.978 86.4424 100.919 86.488C100.861 86.5335 100.794 86.5662 100.722 86.5839C100.65 86.6017 100.575 86.604 100.502 86.5907C99.5169 86.5598 98.5314 86.5907 97.4593 86.5907L94.3697 75.0361C94.2338 75.6207 94.1164 76.2054 93.9588 76.7809C93.0814 79.9487 92.1957 83.1145 91.3018 86.2783C91.2686 86.3565 91.217 86.4255 91.1513 86.4794C91.0857 86.5333 91.008 86.5704 90.9249 86.5876C89.9547 86.6124 88.9877 86.5876 88.0176 86.6062C87.7581 86.6062 87.653 86.5227 87.5851 86.2628C86.6603 82.6639 85.7406 79.0712 84.8261 75.4846C84.6098 74.6463 84.4183 73.7986 84.1587 72.9726C84.0608 72.7096 83.8724 72.4902 83.6273 72.3539C83.4162 72.2629 83.2377 72.1097 83.1157 71.9146C82.9937 71.7195 82.934 71.4918 82.9445 71.2618C82.9445 70.7699 82.9445 70.2812 82.9445 69.6748C83.961 69.7336 84.9435 69.7336 85.9074 69.8635C86.5037 69.9439 86.8343 70.4451 86.961 71.036C87.5109 73.4243 88.0794 75.8125 88.6201 78.2039C88.9476 79.6548 89.238 81.115 89.5469 82.5721C89.575 82.6539 89.6112 82.7327 89.6551 82.8072C90.0505 81.2821 90.4367 79.7786 90.8353 78.2782C91.5562 75.5785 92.2822 72.8777 93.0134 70.176C93.0536 70.0306 93.2266 69.814 93.3471 69.8109C94.1164 69.7769 94.8919 69.7924 95.6951 69.7924" />
        <path d="M141.558 84.0722V86.4573C140.532 86.4573 139.515 86.5192 138.511 86.4357C137.798 86.38 137.489 85.817 137.485 84.827C137.485 82.8347 137.485 80.8455 137.485 78.8532C137.491 78.6896 137.48 78.5257 137.452 78.3644C137.143 76.8517 135.721 76.3567 134.362 77.2786C133.463 77.8973 133.046 78.8006 132.817 79.8153C132.741 80.1837 132.702 80.559 132.703 80.9352C132.703 82.7605 132.703 84.5857 132.703 86.4543H129.808C129.808 86.3336 129.771 86.2068 129.768 86.083L129.694 78.9677C129.705 78.7383 129.695 78.5083 129.663 78.2809C129.372 76.765 127.658 76.335 126.379 77.4611C125.362 78.3521 124.967 79.54 124.933 80.8393C124.886 82.5161 124.933 84.1959 124.933 85.8726V86.4481H122.007V85.718C122.007 83.0853 122.007 80.4588 122.007 77.82C122.007 77.3343 121.905 77.0032 121.364 76.8919C121.155 76.8453 120.968 76.7274 120.835 76.5581C120.703 76.3888 120.633 76.1787 120.638 75.9638C120.604 75.4936 120.638 75.014 120.638 74.4974C121.695 74.4974 122.727 74.4324 123.746 74.5191C124.5 74.584 124.815 75.079 124.828 75.8648C124.822 76.1058 124.837 76.3469 124.871 76.5856C125.798 75.1687 126.981 74.2344 128.705 74.1788C130.478 74.12 131.723 74.8934 132.314 76.6537C132.613 76.2492 132.936 75.8628 133.281 75.4966C134.714 74.1478 136.395 73.8323 138.224 74.4696C139.488 74.9058 140.062 75.9452 140.291 77.1858C140.38 77.736 140.424 78.2927 140.421 78.8501C140.436 80.1835 140.421 81.5168 140.421 82.8502C140.421 83.9608 140.439 83.9855 141.554 84.0876" />
        <path d="M142.428 112.877C142.635 112.364 142.798 111.869 143.03 111.405C143.262 110.941 143.741 110.786 144.349 110.975C145.523 111.315 146.707 111.497 147.921 111.2C148.545 111.08 149.105 110.741 149.502 110.243C149.898 109.746 150.105 109.123 150.083 108.487C150.083 108.051 150.083 107.618 150.083 107.036C149.59 107.751 148.86 108.267 148.023 108.494C145.366 109.112 142.77 107.958 141.766 105.31C141.07 103.55 141.059 101.593 141.735 99.8252C142.529 97.6597 144.377 96.5181 146.719 96.5583C147.406 96.5426 148.088 96.683 148.713 96.9692C149.338 97.2553 149.89 97.6797 150.328 98.2103C150.358 97.9845 150.365 97.8484 150.396 97.7153C150.531 97.1306 150.961 96.8244 151.789 96.7872C152.617 96.7501 153.399 96.7872 154.261 96.7872C154.302 97.3903 154.291 97.9957 154.23 98.597C154.169 98.7521 154.075 98.8925 153.956 99.0088C153.837 99.1251 153.694 99.2146 153.538 99.2714C153.364 99.3134 153.212 99.4182 153.111 99.5655C153.01 99.7129 152.967 99.8924 152.991 100.07C152.991 102.786 152.991 105.499 152.991 108.215C152.991 111.173 151.22 113.227 148.304 113.737C146.304 114.077 144.247 113.776 142.428 112.877ZM150.232 102.625H150.189C150.189 102.507 150.189 102.393 150.189 102.278C150.043 100.664 149.62 99.3024 147.559 99.0611C146.262 98.9064 145.06 99.4323 144.556 100.75C144.32 101.355 144.208 102.001 144.23 102.65C144.251 103.299 144.404 103.937 144.68 104.524C145.236 105.762 146.376 106.325 147.794 106.164C148.919 106.037 149.71 105.273 150.015 103.998C150.124 103.531 150.151 103.077 150.235 102.625H150.232Z" />
        <path d="M166.31 90.5227C166.505 90.0246 166.663 89.5606 166.87 89.1182C167.117 88.5861 167.617 88.4438 168.353 88.6572C169.417 88.9968 170.548 89.0753 171.649 88.8861C172.314 88.7977 172.922 88.4625 173.351 87.9468C173.781 87.4312 174.002 86.7727 173.97 86.1019C173.97 85.6812 173.97 85.2604 173.97 84.8366C173.914 84.8366 173.868 84.8366 173.858 84.8366C172.314 87.0671 168.062 86.6123 166.443 84.3726C164.784 82.0678 164.664 78.4266 166.32 76.1961C167.497 74.606 169.131 74.0491 171.072 74.2286C171.664 74.2615 172.244 74.418 172.772 74.6881C173.301 74.9582 173.768 75.3359 174.143 75.797C174.291 75.4505 174.359 75.0422 174.6 74.8164C174.888 74.6114 175.229 74.4923 175.582 74.473C176.008 74.4451 176.435 74.4451 176.861 74.473H178.144C178.183 75.0771 178.173 75.6834 178.113 76.2858C178.057 76.434 177.968 76.5679 177.855 76.6781C177.741 76.7883 177.604 76.8719 177.455 76.9231C176.976 77.0778 176.874 77.3531 176.874 77.7986C176.874 80.4467 176.834 83.0949 176.892 85.743C176.963 88.8583 175.106 90.8444 172.233 91.3889C170.215 91.7706 168.128 91.468 166.301 90.5289L166.31 90.5227ZM174.09 80.3539C174.037 79.8713 174.01 79.4784 173.951 79.0917C173.894 78.489 173.631 77.9245 173.207 77.4933C172.782 77.0621 172.222 76.7908 171.621 76.7251C170.293 76.5055 169.085 77.0097 168.572 78.0987C168.224 78.7895 168.058 79.5581 168.09 80.3313C168.122 81.1045 168.35 81.8567 168.754 82.5164C169.372 83.5558 170.358 83.9425 171.535 83.8281C172.08 83.7949 172.601 83.5855 173.017 83.2313C173.434 82.8771 173.725 82.3973 173.846 81.8636C173.962 81.364 174.046 80.8578 174.099 80.3477L174.09 80.3539Z" />
        <path d="M98.7237 106.421C97.8819 107.334 96.849 108.049 95.699 108.515C92.5322 109.793 89.4736 109.626 86.6713 107.572C84.7527 106.164 83.7548 104.169 83.4304 101.824C83.1431 99.7417 83.4304 97.7556 84.5364 95.9458C86.316 93.0533 88.9823 91.8065 92.3314 91.9241C93.6941 91.9528 95.033 92.288 96.2489 92.9048C97.5311 93.5699 98.3159 94.5475 98.2015 96.0819C98.1707 96.4717 98.2015 96.8677 98.2015 97.3008H95.5105C95.4932 97.2275 95.4808 97.153 95.4735 97.078C95.4333 95.9272 95.1491 95.4817 94.0677 95.1012C90.8515 93.969 87.2707 95.392 86.5879 99.225C86.038 102.269 87.6322 105.323 90.4406 106.201C92.4673 106.82 94.3056 106.285 96.0358 105.174C96.3638 104.975 96.7302 104.847 97.1109 104.8C97.2308 104.8 97.3492 104.826 97.4584 104.876C97.5675 104.925 97.665 104.997 97.7443 105.087C98.0965 105.493 98.39 105.947 98.7268 106.408" />
        <path d="M206.469 86.4665H203.546V85.9066C203.546 83.2244 203.546 80.5453 203.546 77.8632C203.546 77.3558 203.451 77.0124 202.898 76.8948C202.688 76.8419 202.502 76.7183 202.372 76.5449C202.242 76.3715 202.176 76.1586 202.184 75.942C202.144 75.4718 202.184 74.9954 202.184 74.4787C203.237 74.4787 204.254 74.4354 205.273 74.4942C205.953 74.5313 206.339 75.0263 206.376 75.7316C206.392 75.9915 206.376 76.2545 206.376 76.6597C206.574 76.403 206.685 76.2483 206.818 76.0843C208.264 74.0116 211.144 73.761 212.954 74.6643C213.468 74.914 213.906 75.2982 214.22 75.7763C214.535 76.2544 214.714 76.8087 214.74 77.3805C214.87 79.0294 214.833 80.6938 214.866 82.352C214.866 82.516 214.866 82.6799 214.866 82.8439C214.866 83.9978 214.866 83.9978 216.013 84.0813V86.4696C214.99 86.4696 213.958 86.5222 212.923 86.451C212.274 86.4046 211.931 85.8323 211.931 85.0249C211.931 83.0512 211.931 81.0774 211.931 79.1037C211.931 78.485 211.854 77.8817 211.406 77.4053C210.773 76.7278 209.97 76.7618 209.172 76.9598C207.668 77.3341 206.855 78.3922 206.596 79.8616C206.499 80.5937 206.463 81.3325 206.488 82.0705C206.488 83.5276 206.488 84.9878 206.488 86.4789" />
        <path d="M154.305 86.473H151.388V85.9192C151.388 83.237 151.388 80.5549 151.388 77.8758C151.388 77.3746 151.292 77.0219 150.739 76.8982C150.528 76.8498 150.34 76.7286 150.208 76.5556C150.077 76.3826 150.01 76.1688 150.02 75.9515C149.989 75.4813 150.02 75.0049 150.02 74.4852C151.064 74.4852 152.08 74.4264 153.088 74.5037C153.857 74.5625 154.197 75.0606 154.209 75.8649C154.209 76.0908 154.209 76.3135 154.209 76.6476C154.293 76.5571 154.37 76.461 154.441 76.3599C155.772 74.1572 158.556 73.6963 160.589 74.5594C161.164 74.7959 161.659 75.1951 162.012 75.7082C162.364 76.2213 162.56 76.8261 162.576 77.4489C162.702 79.2463 162.665 81.056 162.699 82.8627C162.699 83.0267 162.699 83.1906 162.699 83.3577C162.718 83.8496 162.894 84.0228 163.394 84.0383C163.527 84.0383 163.657 84.0383 163.83 84.0383V86.4327C162.786 86.4327 161.723 86.4915 160.672 86.4111C160.079 86.3647 159.776 85.8078 159.773 85.0715C159.773 83.1628 159.773 81.254 159.773 79.3483C159.773 78.9711 159.734 78.5949 159.659 78.2254C159.577 77.7922 159.333 77.4069 158.976 77.149C158.619 76.8911 158.177 76.7803 157.74 76.8394C155.677 77.0343 154.342 78.4667 154.326 80.5672C154.308 82.343 154.326 84.1187 154.326 85.8975V86.4699" />
        <path d="M113.109 103.017C113.181 106.328 110.542 108.877 107.344 109.205C105.219 109.412 103.328 108.917 101.783 107.429C100.004 105.69 99.5 103.528 100.173 101.152C100.847 98.7761 102.534 97.3252 104.919 96.821C107.391 96.2858 109.634 96.821 111.45 98.6771C112.008 99.2491 112.443 99.9291 112.728 100.676C113.013 101.422 113.143 102.219 113.109 103.017ZM102.883 102.894C102.8 104.883 104.354 106.674 106.232 106.751C108.395 106.841 110.082 105.307 110.153 103.212C110.23 100.97 108.747 99.1907 106.723 99.1195C104.57 99.036 102.988 100.592 102.883 102.894Z" />
        <path d="M194.508 86.81C191.369 86.779 188.805 84.9352 188.098 82.1138C187.171 78.4015 189.435 74.8469 193.304 74.2591C195.364 73.9498 197.249 74.3458 198.886 75.676C199.507 76.1753 200.019 76.7965 200.391 77.5015C200.763 78.2065 200.987 78.9802 201.049 79.7751C201.156 80.5977 201.094 81.4335 200.867 82.2314C200.64 83.0293 200.253 83.7725 199.73 84.4155C198.746 85.6242 197.351 86.4263 195.812 86.6677C195.38 86.7481 194.938 86.7667 194.499 86.8131L194.508 86.81ZM198.111 80.4742C198.141 79.8893 198.029 79.3058 197.786 78.7734C197.542 78.241 197.173 77.7755 196.711 77.4164C196.249 77.0573 195.707 76.8153 195.132 76.7111C194.556 76.6068 193.964 76.6433 193.406 76.8176C192.015 77.2507 190.721 78.615 190.9 80.864C190.923 81.3938 191.064 81.9118 191.311 82.3807C191.559 82.8495 191.907 83.2574 192.332 83.575C192.756 83.8926 193.245 84.1119 193.764 84.2171C194.283 84.3223 194.819 84.3109 195.333 84.1835C197.067 83.7906 198.12 82.3397 198.12 80.4711L198.111 80.4742Z" />
        <path d="M139.219 103.38H130.935C130.88 104.988 132.335 106.52 133.96 106.668C134.973 106.765 135.991 106.558 136.886 106.074C137.72 105.635 138.184 105.765 138.678 106.594C138.832 106.845 138.987 107.098 139.151 107.392C138.336 108.13 137.352 108.656 136.287 108.923C133.966 109.511 131.804 109.233 129.916 107.637C128.84 106.724 128.139 105.446 127.948 104.048C127.654 102.192 127.948 100.422 129.103 98.8723C129.604 98.1973 130.249 97.6426 130.991 97.2487C131.732 96.8548 132.553 96.6316 133.392 96.5954C135.042 96.4654 136.558 96.8243 137.76 98.0556C138.578 98.8976 139.087 99.9926 139.203 101.162C139.249 101.899 139.254 102.639 139.219 103.377V103.38ZM136.25 101.304C136.278 100.676 136.056 100.063 135.634 99.5989C135.211 99.1348 134.621 98.8579 133.994 98.829C132.48 98.798 131.115 99.9086 131.056 101.304H136.25Z" />
        <path d="M158.58 103.284C158.478 104.521 159.427 105.87 160.666 106.359C161.982 106.875 163.236 106.653 164.453 106.049C165.399 105.579 165.782 105.675 166.307 106.551C166.832 107.426 166.82 107.392 165.967 107.946C163.329 109.647 159.921 109.545 157.625 107.637C156.997 107.118 156.484 106.472 156.121 105.742C155.758 105.012 155.553 104.213 155.518 103.398C155.347 101.881 155.705 100.351 156.532 99.0672C156.994 98.3674 157.606 97.7792 158.323 97.3453C159.04 96.9113 159.844 96.6425 160.678 96.5583C162.223 96.351 163.644 96.5954 164.904 97.5482C166.026 98.399 166.585 99.5838 166.811 100.933C166.91 101.527 166.879 102.142 166.922 102.746C166.947 103.148 166.792 103.284 166.378 103.281C163.965 103.262 161.549 103.281 159.133 103.281H158.577L158.58 103.284ZM163.829 101.264C163.869 100.852 163.796 100.437 163.618 100.063C163.44 99.69 163.164 99.3723 162.819 99.1445C161.836 98.5258 160.842 98.6588 159.909 99.2281C159.548 99.4393 159.243 99.7346 159.02 100.089C158.797 100.443 158.663 100.846 158.63 101.264H163.829Z" />
        <path d="M186.53 74.4633V76.8021C185.773 76.8021 185.04 76.8021 184.305 76.8021C183.996 76.8021 183.9 76.9042 183.907 77.2012C183.938 78.7944 183.965 80.3876 183.978 81.9808C183.978 83.1688 184.855 83.9607 186.14 84.0443C186.354 84.0597 186.564 84.0443 186.854 84.0443V86.5037C184.722 86.943 181.84 86.1665 181.206 83.704C181.06 83.1335 180.982 82.5479 180.972 81.9592C180.941 80.2669 180.972 78.5562 180.972 76.8454C180.805 76.8268 180.663 76.8175 180.524 76.799C180.262 76.7746 180.02 76.6505 179.848 76.4524C179.675 76.2543 179.585 75.9974 179.597 75.7348C179.597 75.3419 179.597 74.9459 179.597 74.4973H181.049V71.2119C181.778 71.2119 182.448 71.1779 183.113 71.2119C183.337 71.2376 183.542 71.348 183.687 71.5205C183.833 71.693 183.907 71.9147 183.894 72.14C183.916 72.7309 183.925 73.3248 183.894 73.9157C183.894 74.3117 183.99 74.4757 184.416 74.4571C185.102 74.4231 185.791 74.4571 186.52 74.4571" />
        <path d="M113.81 69.7335C114.879 69.7335 115.895 69.7025 116.899 69.7335C117.199 69.7447 117.483 69.8724 117.691 70.0895C117.898 70.3066 118.013 70.5961 118.012 70.8967C118.012 71.0266 118.027 71.1596 118.027 71.2896C118.052 75.1731 118.077 79.0535 118.101 82.9309C118.101 83.859 117.907 84.026 119.152 84.0569V86.4328C119.05 86.4589 118.947 86.4755 118.843 86.4823C118.055 86.4823 117.264 86.4823 116.476 86.4823C115.593 86.4823 115.179 86.0616 115.157 85.1892C115.126 83.828 115.092 82.4637 115.086 81.1025C115.086 78.3863 115.086 75.6722 115.086 72.9601C115.086 72.5332 114.972 72.2919 114.542 72.1651C113.974 71.998 113.788 71.7041 113.785 71.1132C113.785 70.6708 113.785 70.2285 113.785 69.7211" />
        <path d="M114.215 92.1467C115.284 92.1467 116.285 92.1188 117.283 92.1467C118.058 92.1745 118.5 92.688 118.519 93.5295C118.534 95.2248 118.519 96.917 118.519 98.6123C118.519 100.834 118.519 103.055 118.519 105.276C118.519 106.365 118.519 106.365 119.584 106.495C119.622 107.219 119.668 107.952 119.677 108.685C119.677 108.781 119.492 108.964 119.393 108.964C118.466 108.964 117.524 108.945 116.594 108.874C116.013 108.827 115.667 108.354 115.605 107.636C115.587 107.442 115.605 107.244 115.605 107.046C115.605 103.194 115.605 99.3455 115.605 95.497C115.605 95.0083 115.506 94.6803 114.987 94.569C114.769 94.5143 114.577 94.386 114.442 94.2056C114.308 94.0252 114.239 93.8039 114.249 93.579C114.215 93.1242 114.249 92.6509 114.249 92.1436" />
        <path d="M121.11 92.1495C122.21 92.1495 123.257 92.1031 124.302 92.165C125.022 92.2052 125.399 92.7837 125.405 93.7118C125.405 95.503 125.405 97.2973 125.405 99.0885C125.405 101.151 125.405 103.223 125.405 105.304C125.405 106.362 125.405 106.362 126.468 106.501V108.867C125.426 108.867 124.394 108.92 123.378 108.849C122.785 108.806 122.485 108.264 122.485 107.512C122.485 104.291 122.478 101.069 122.463 97.848C122.463 97.0436 122.463 96.2362 122.463 95.4319C122.48 95.3345 122.477 95.2349 122.454 95.1388C122.432 95.0426 122.391 94.9518 122.334 94.8716C122.276 94.7914 122.204 94.7233 122.12 94.6713C122.036 94.6194 121.943 94.5845 121.846 94.5687C121.616 94.525 121.411 94.3957 121.272 94.2069C121.133 94.0181 121.071 93.7838 121.098 93.5509V92.1464" />
        <path d="M148.555 84.0692V86.4637C147.458 86.4637 146.376 86.5101 145.301 86.4482C144.711 86.4111 144.374 85.8666 144.374 85.1272C144.374 83.367 144.374 81.6067 144.374 79.8464V77.7242C144.374 77.3251 144.272 77.0529 143.8 76.9601C143.126 76.8301 142.895 76.4713 142.895 75.7659C142.895 75.3885 142.895 75.0111 142.895 74.6336C142.901 74.5912 142.912 74.5497 142.929 74.5099C144.028 74.5099 145.141 74.4418 146.241 74.5346C146.982 74.5965 147.279 75.1534 147.282 76.1279C147.282 78.4326 147.282 80.7343 147.282 83.039C147.282 84.0166 147.282 84.0166 148.261 84.0445C148.341 84.0445 148.422 84.0599 148.533 84.0692" />
        <path d="M112.294 84.0849V86.4577C111.234 86.4577 110.187 86.5072 109.149 86.436C108.596 86.3989 108.293 85.842 108.29 85.1181C108.29 83.1939 108.29 81.2666 108.29 79.3423V77.7151C108.317 77.5435 108.276 77.3681 108.175 77.2265C108.075 77.0848 107.923 76.9882 107.752 76.9572C107.162 76.7994 106.933 76.4498 106.918 75.8311C106.918 75.4042 106.918 74.9772 106.918 74.4668H109.473C110.755 74.4668 111.206 74.9246 111.209 76.2271C111.209 78.4483 111.209 80.6695 111.209 82.8907C111.209 83.9673 111.209 83.9673 112.297 84.0849" />
        <path d="M147.011 71.0606C147.073 72.298 146.958 72.4774 145.602 72.4527C144.675 72.4341 144.48 72.2702 144.48 71.3452C144.48 71.0667 144.48 70.7883 144.48 70.5068C144.48 69.9376 144.706 69.7303 145.29 69.7241H146.217C146.819 69.7241 146.998 69.9128 147.002 70.5192C147.002 70.6986 147.002 70.8811 147.002 71.0606" />
        <path d="M110.914 71.0884C110.985 72.3259 110.797 72.4713 109.573 72.4527C108.514 72.4527 108.381 72.3073 108.381 71.1688C108.381 69.7241 108.381 69.7241 109.808 69.7241C110.846 69.7241 110.914 69.7922 110.914 70.8409V71.0884Z" />
      </g>
    </svg>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['light', 'dark']).isRequired
}