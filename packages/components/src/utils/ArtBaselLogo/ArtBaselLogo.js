import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  default: '#BDBDBD',
  basel: '#00A0CF',
  miami: '#00C18B',
  hongkong: '#E0004D',
  cities: '#FF3D00',
};

const textColors = {
  white: '#FFFFFF',
  dark: '#444749',
};

const ArtBaselLogo = ({
  width, height, color, variant,
}) => {
  return (
    <svg data-testid="art-basel-logo" width={width} height={height} viewBox="0 0 115 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M42 38.5797C42 33.9568 42.0442 29.376 42.0442 24.6692C42.0442 18.1971 42 11.7673 42 5.29517V0.798396C42 0.252102 42.0442 0 42.7941 0H44.0736C44.8236 0 44.956 0.084034 44.956 0.42017C44.956 5.71549 45 11.0527 45 16.3481C45 22.3997 44.956 28.3674 44.956 34.4192V38.0753C44.956 38.7898 44.9118 39 44.4265 39H42.9706C42.0882 39 42 38.9158 42 38.5797Z" fill={variants[variant]}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M108.992 31.8468C108.982 32.1022 108.975 32.2838 108.975 32.3798C108.975 33.5949 109.423 33.9189 110.196 33.9189C110.393 33.9189 110.699 33.8955 111.043 33.8693C111.482 33.8357 111.983 33.7975 112.395 33.7975C112.731 33.7975 113.024 33.8083 113.308 33.8187C113.573 33.8285 113.829 33.8379 114.104 33.8379C114.552 33.8379 114.674 33.7569 114.837 33.5949C114.959 33.3518 114.959 32.9469 114.959 32.4204V29.2612C114.959 28.7241 114.949 27.871 114.938 27.0349L114.938 27.0329C114.928 26.2303 114.919 25.4437 114.919 24.9678L114.878 19.4595C114.878 17.8394 114.898 16.2496 114.919 14.6599C114.939 13.0702 114.959 11.4804 114.959 9.86032C114.959 9.11925 114.971 8.44858 114.982 7.82935C114.991 7.29827 115 6.80408 115 6.3367C115 5.44555 114.552 5.1216 113.901 5.08103C112.476 4.95962 110.807 5.04061 109.993 5.1216C109.219 5.20258 108.975 5.24315 108.975 6.21515C108.975 6.43153 108.98 6.78667 108.987 7.24396L108.987 7.24531L108.987 7.24692C108.999 8.07325 109.016 9.23222 109.016 10.5084L109.056 14.6802C109.056 15.0239 109.048 15.5937 109.039 16.2237L109.039 16.227C109.028 17.007 109.016 17.8788 109.016 18.5279C109.016 19.1119 109.033 19.8274 109.052 20.5928C109.074 21.4729 109.097 22.419 109.097 23.3072C109.097 24.2591 109.087 25.1907 109.077 26.1222C109.067 27.0538 109.056 27.9853 109.056 28.9371C109.056 30.2183 109.016 31.2394 108.992 31.8455L108.992 31.8468ZM101.444 20.1885C101.444 20.8366 101.444 21.5252 101.282 21.6872C101.159 21.8087 100.834 21.8491 100.02 21.8491C99.6938 21.8491 99.4903 21.8087 99.3274 21.7277C99.0425 21.5656 98.9612 21.2821 98.9612 20.0671C98.9612 18.852 99.0018 17.7585 99.1647 16.9483C99.2868 16.3814 99.6125 16.0573 100.182 16.0573C100.671 16.0573 100.997 16.3408 101.159 16.7459C101.322 17.1914 101.363 17.7585 101.404 18.3659C101.444 18.852 101.444 19.4191 101.444 20.1885ZM94.2389 29.5041C94.768 30.9622 95.4195 31.8534 96.6408 32.7444C97.862 33.6354 99.3274 33.9999 101.363 33.9999C102.666 33.9999 103.643 33.9189 104.823 33.595C105.841 33.3114 106.289 32.9469 106.411 31.9748C106.462 31.6191 106.481 31.104 106.498 30.6396C106.508 30.3637 106.518 30.1054 106.533 29.9092C106.574 29.5041 106.574 28.9776 106.574 28.4916C106.574 27.9245 106.289 27.6816 105.76 27.6816C105.475 27.6816 105.067 27.8435 104.783 27.9651C104.498 28.0866 104.09 28.2486 103.683 28.37C103.032 28.5726 102.544 28.6131 101.851 28.6131C100.915 28.6131 100.264 28.37 99.6938 27.9245C99.3274 27.641 99.0833 27.317 99.0833 26.7905C99.0833 26.5474 99.1647 26.3045 99.3682 26.1829C99.5717 26.0615 99.9381 25.9804 100.874 25.9804H102.503C102.849 25.9804 103.195 25.9905 103.541 26.0007C103.887 26.0108 104.233 26.0209 104.579 26.0209C105.841 26.0209 106.452 25.4944 106.655 24.4009C106.696 24.1984 106.737 23.9958 106.777 23.4288C106.859 22.4972 106.899 20.9581 106.899 19.7026C106.899 18.5685 106.737 17.2318 106.533 16.3408L106.501 16.1998C106.303 15.3242 106.043 14.178 105.271 13.1411C104.05 11.4805 102.34 10.9135 100.386 10.9135C98.3912 10.9135 97.1699 11.3995 96.2336 12.2096C95.1345 13.1816 94.5239 14.1941 94.1167 15.7737C93.7504 17.1508 93.6283 18.6089 93.5468 19.986C93.4654 21.3632 93.4654 22.4972 93.5062 23.8338C93.5875 26.2235 93.7504 28.1271 94.2389 29.5041ZM82.1892 33.0684C82.3521 33.271 82.5964 33.4329 83.0034 33.5949C83.6955 33.8784 84.6318 34 85.7716 34C88.0922 34 89.6797 33.0279 90.779 31.6104C91.6338 30.4762 92.2037 28.9776 92.2037 26.8715C92.2037 25.2514 91.8373 23.7122 91.2268 22.6997C90.6568 21.7277 89.8834 20.7555 89.3134 20.1075C88.932 19.6807 88.6484 19.3927 88.4134 19.1542C88.247 18.9853 88.105 18.8411 87.97 18.69C87.685 18.3659 87.5628 17.9609 87.5628 17.4749C87.5628 16.7053 88.0106 16.3003 88.6619 16.3003C89.0691 16.3003 89.4356 16.3813 89.7612 16.5029C90.1275 16.6243 90.4532 16.7053 90.779 16.7053C91.3081 16.7053 91.4709 16.5433 91.4709 15.8953V14.0321C91.4709 13.4652 91.4709 12.9386 91.4303 12.2501C91.3895 11.6425 90.9417 11.3995 90.1683 11.197C89.5169 11.035 88.6213 10.9134 87.8479 10.9134C85.2017 10.9134 83.9398 11.8856 83.0034 13.3841C82.1078 14.8017 81.9449 16.0978 81.9449 17.4749C81.9449 18.9735 82.3521 20.6745 83.0848 21.6871C83.6142 22.4161 84.1433 23.0642 84.7133 23.6313C84.8586 23.7759 85.0004 23.9098 85.1364 24.0382C85.4574 24.3414 85.7464 24.6144 85.9752 24.9273C86.3009 25.3324 86.5859 25.8995 86.5859 26.8309C86.5859 28.0866 86.0159 28.6941 85.0389 28.6941C84.5558 28.6941 84.1747 28.5673 83.7141 28.4142C83.5924 28.3737 83.4652 28.3314 83.3291 28.2891C83.0442 28.208 82.7592 28.127 82.5149 28.127C82.3521 28.127 82.1892 28.1676 82.0671 28.3296C81.9449 28.5321 81.9043 28.7751 81.9043 29.6662V31.7318C81.9043 32.6229 82.0265 32.8659 82.1892 33.0684ZM74.4548 27.6815C74.4956 26.7095 74.4956 25.0893 74.4956 24.6033C74.4956 24.0364 74.4956 23.6313 74.3734 23.2262C74.2513 22.7807 73.9662 22.4567 73.3557 22.4567C72.9079 22.4567 72.4193 22.6997 72.2566 23.2262C72.0937 23.7123 72.0529 24.1983 72.0529 25.0084C72.0529 26.0615 72.0529 26.8715 72.0937 27.7221C72.1344 28.5725 72.5007 29.3827 73.2743 29.3827C74.0884 29.3827 74.414 28.7751 74.4548 27.6815ZM67.7378 32.4608C67.1271 31.7318 66.7201 30.5167 66.5979 29.2612C66.4758 28.0461 66.3944 27.0335 66.3944 25.9804C66.3944 25.3325 66.3944 24.4819 66.5979 22.9022C66.7608 21.5252 67.4121 20.1885 68.4299 19.2569C69.2033 18.5685 70.1803 18.2849 71.2794 18.2849C72.0529 18.2849 72.7857 18.4065 73.1928 18.5279C73.2742 18.5482 73.3557 18.571 73.4372 18.5938C73.6814 18.6621 73.9256 18.7304 74.1699 18.7304C74.5769 18.7304 74.7397 18.4065 74.7397 17.9204C74.7397 17.5153 74.6177 17.1104 74.3734 16.8673C73.8849 16.3814 73.1522 16.2192 72.2972 16.2192C71.6051 16.2192 70.9132 16.3408 70.4654 16.4623C70.2153 16.5301 69.9907 16.6106 69.7701 16.6896C69.5957 16.7521 69.4239 16.8137 69.2441 16.8673L69.1218 16.904C68.7632 17.0122 68.4376 17.1104 68.1448 17.1104C67.9007 17.1104 67.697 17.0698 67.5343 16.9078C67.3714 16.7459 67.3308 16.4218 67.29 16.0573C67.2492 15.6523 67.2492 15.4092 67.2492 14.6398V12.9386C67.2492 12.3715 67.3714 12.0476 67.8192 11.845C68.267 11.6425 69.2847 11.3995 70.506 11.2374C71.361 11.116 72.1344 11.035 73.3149 11.035C75.1469 11.035 76.4903 11.3995 77.7115 12.088C79.1363 12.8982 79.7876 14.5992 79.9505 15.9763C80.048 16.8487 80.0417 17.8244 80.0352 18.8415C80.0336 19.0992 80.0319 19.3596 80.0319 19.6216L80.0727 24.3603C80.0727 25.6784 80.085 26.7007 80.0961 27.6176C80.1051 28.3631 80.1133 29.0389 80.1133 29.7472C80.1133 30.1724 80.093 30.5774 80.0726 30.9824C80.0523 31.3875 80.0319 31.7926 80.0319 32.2179V33.0685C79.9913 33.4734 79.5027 33.5949 78.8514 33.5949H75.3504C75.1061 33.5949 75.0247 33.4734 75.0247 33.2304V32.5418C75.0247 32.2989 74.9434 32.1773 74.7397 32.1773C74.6111 32.1773 74.4499 32.3553 74.2665 32.5579C74.1597 32.6758 74.0454 32.802 73.9256 32.9063C73.3149 33.5544 72.3787 33.8785 71.0759 33.8785C69.6919 33.8785 68.552 33.433 67.7378 32.4608ZM55.9734 13.0601C55.9734 13.5919 55.9602 14.1632 55.9488 14.6536C55.9402 15.0223 55.9327 15.3453 55.9327 15.5713C55.9327 16.3003 56.2583 16.5029 56.869 16.5029C57.2761 16.5029 57.6425 16.4219 57.9682 16.1383C58.3754 15.7738 58.7416 15.0852 58.7416 13.0195C58.7416 10.6299 58.1311 10.1034 56.8283 10.1034C56.177 10.1034 55.9327 10.2654 55.9327 10.5895C55.9327 10.9847 55.9434 11.4442 55.9539 11.8909C55.9638 12.3136 55.9734 12.7253 55.9734 13.0601ZM58.9859 24.3198C58.9859 23.6718 58.9045 22.6997 58.6602 21.9706C58.416 21.2416 57.9682 20.7961 57.1133 20.7961C56.0956 20.7961 55.9327 21.1606 55.9327 21.5657C55.9327 22.1008 55.9204 22.6604 55.9093 23.1636C55.9003 23.5744 55.8921 23.9476 55.8921 24.2389C55.8921 24.5392 55.8896 24.8543 55.8871 25.1733C55.8794 26.145 55.8714 27.1523 55.9327 27.884C55.9734 28.4511 56.177 28.7346 56.6655 28.7346C57.8868 28.7346 58.3346 28.127 58.6602 27.1144C58.9045 26.3044 58.9859 25.1299 58.9859 24.3198ZM64.9295 24.8059C64.9295 27.5601 64.3188 29.7472 63.1383 31.2862C61.7541 33.1088 60.2479 33.8379 56.3805 33.8379H52.3097C50.6406 33.8379 50.1928 33.5139 50.152 32.2584C50.1113 31.1647 50.1113 29.8687 50.1113 28.8966C50.1113 28.3249 50.1293 27.1435 50.1484 25.8925C50.1699 24.4846 50.1928 22.988 50.1928 22.1732V9.94141C50.1928 9.17072 50.182 8.48575 50.1715 7.82036C50.1617 7.19193 50.152 6.58078 50.152 5.93158C50.152 5.44565 50.152 5.20254 51.0069 5.12155C51.9432 5.04056 53.2866 5 55.0778 5H55.8513C60.2885 5 61.6727 5.7696 62.8126 7.02527C63.9117 8.24023 64.4817 10.2249 64.4817 12.3715C64.4817 14.6801 63.9525 16.7864 62.5275 18.0014C64.1152 19.0139 64.9295 21.2822 64.9295 24.8059ZM29.9611 32.3393C29.3098 31.4483 28.9842 30.1117 28.9842 28.4916C28.9842 27.9235 28.9937 27.2795 29.0035 26.6147C29.014 25.9054 29.0248 25.1716 29.0248 24.4818C29.0248 23.9867 29.0158 23.5006 29.0063 22.9855C28.9956 22.4051 28.9842 21.7877 28.9842 21.0796C28.9842 20.4814 28.9983 19.6853 29.0099 19.0338C29.018 18.5825 29.0248 18.2003 29.0248 18.0015C29.0248 17.7989 28.9434 17.7584 28.4548 17.7584H28.2921C28.007 17.7584 27.9257 17.5154 27.9257 17.1103L27.9664 14.7612C27.9664 14.3909 27.9531 13.9545 27.9417 13.5804C27.9331 13.2998 27.9257 13.0543 27.9257 12.8981C27.9257 12.6146 27.9257 12.4526 28.2513 12.4526H28.862C29.1063 12.4526 29.1469 12.331 29.1469 12.0475L29.1063 9.90096L29.0655 8.11879C29.0655 7.06566 29.3098 6.8227 30.124 6.8227C30.5134 6.8227 30.8452 6.83415 31.1563 6.84489C31.4306 6.85436 31.6888 6.86327 31.9559 6.86327C32.3565 6.86327 32.7161 6.84967 33.0191 6.83823C33.2395 6.8299 33.43 6.8227 33.5843 6.8227C33.8692 6.8227 34.1542 6.86327 34.3578 7.02524C34.5613 7.18722 34.724 7.47075 34.724 7.83526C34.724 8.4844 34.7145 9.13357 34.7046 9.80132C34.6942 10.5084 34.6834 11.2363 34.6834 12.0071C34.6834 12.331 34.724 12.493 34.9277 12.493L36.1896 12.4526C36.6781 12.4526 36.7189 12.6146 36.8003 13.1006C36.841 13.3842 36.8817 13.9512 36.8817 14.3967C36.8817 15.2877 36.8817 16.1383 36.8003 17.0293C36.7595 17.4344 36.7189 17.5964 36.3525 17.5964C35.1718 17.5964 34.8869 17.637 34.7648 17.8394C34.6948 17.9439 34.685 18.1383 34.6577 18.6803C34.6533 18.7685 34.6484 18.8658 34.6427 18.9735C34.602 19.905 34.602 22.3757 34.602 23.0237C34.602 23.2835 34.5997 23.5707 34.5973 23.8723C34.5896 24.8403 34.5806 25.9568 34.6427 26.7905C34.6834 27.3575 34.8462 27.884 35.0498 28.0865C35.294 28.3297 35.7012 28.4511 36.2711 28.4511C36.6374 28.4511 36.8003 28.5321 36.8003 28.8966V30.7193C36.8003 30.9377 36.8085 31.2297 36.8176 31.5513C36.8287 31.9452 36.841 32.3835 36.841 32.7849C36.841 33.2709 36.6374 33.4329 36.0674 33.5949C35.294 33.7974 34.6427 33.8784 33.5843 33.8784C31.9966 33.8784 30.6532 33.3113 29.9611 32.3393ZM26.542 13.5866L26.5828 11.683C26.5828 11.1969 26.5014 11.035 26.0536 11.035C25.3615 11.035 24.8324 11.3185 24.3438 11.845C23.8146 12.412 23.2039 13.7081 22.919 15.2472L22.7969 12.493C22.7561 11.5615 22.6747 11.2779 22.0234 11.2779C21.6666 11.2779 21.2881 11.2887 20.9214 11.2992C20.577 11.309 20.243 11.3185 19.9472 11.3185H19.418C18.4003 11.3185 18.2375 11.683 18.2375 12.3715C18.2375 13.2221 18.2476 13.9816 18.2578 14.741C18.268 15.5004 18.2781 16.2598 18.2781 17.1103V21.3631C18.2781 22.3937 18.2672 23.5006 18.2566 24.565C18.2469 25.5504 18.2375 26.4992 18.2375 27.317L18.2781 30.8407C18.2781 31.7318 18.2781 32.6633 18.3189 32.8659C18.441 33.4734 18.7667 33.5949 19.3772 33.5949H21.7791C23.1225 33.5949 23.5296 33.5545 23.896 33.3114C24.1403 33.1494 24.2217 32.7039 24.2217 32.3394C24.2217 32.1121 24.2103 31.7658 24.196 31.3322C24.1722 30.6069 24.1403 29.6373 24.1403 28.5726L24.0995 25.0083C24.0995 24.0926 24.0663 23.3094 24.0298 22.4489C24.0259 22.358 24.022 22.2661 24.0181 22.1732C23.9774 21.1202 24.0181 19.9861 24.2217 19.1355C24.4252 18.3659 25.0765 17.8799 26.0129 17.8394C26.3385 17.799 26.4607 17.7178 26.5014 17.1913C26.542 16.6648 26.542 15.6523 26.542 15.0852V13.5866ZM9.20029 23.4288C9.60733 23.4288 9.68885 23.4288 9.68885 23.0237C9.68885 22.4972 9.52595 20.715 9.32243 19.2165C9.24105 18.6495 9.11891 17.7585 9.07815 17.2318C8.99677 16.4218 8.79325 14.9637 8.71173 14.3561C8.58959 13.4651 8.54897 13.1816 8.34545 13.1816C8.14179 13.1816 8.10117 13.4651 7.97903 14.3967L7.61261 17.2318C7.49047 18.285 7.36833 19.4595 7.28695 20.1885C7.16481 21.1201 7.00205 22.5378 7.00205 23.1452C7.00205 23.3882 7.08343 23.4288 7.44985 23.4288H9.20029ZM10.4623 32.8254L10.2994 30.8812C10.218 29.9902 10.1773 29.4232 10.0551 28.8561C9.93299 28.37 9.72947 28.2486 8.30469 28.2486C6.92053 28.2486 6.71701 28.3296 6.59487 28.7346C6.43211 29.2206 6.35059 29.8282 6.22859 30.5167C6.14707 30.9218 6.06569 31.4889 5.94355 32.4609C5.86217 33.2305 5.61789 33.595 4.80366 33.595C4.64091 33.595 4.07096 33.6354 3.09398 33.6354C2.19838 33.6354 1.5063 33.6354 0.97698 33.595C0.366421 33.5544 0 33.4329 0 32.9874C0 32.7848 0.0813794 32.2583 0.12214 31.9748L0.52918 29.5851C1.09912 26.2235 1.62844 22.8617 2.19838 19.5001C2.60542 17.0699 2.97184 14.4777 3.37888 12.0476C3.7453 9.86035 4.07096 7.95678 4.478 5.85066C4.60014 5.44558 4.76305 5.32402 5.12932 5.24304C5.49575 5.16205 6.10645 5.16205 7.00205 5.16205C7.61261 5.16205 8.58959 5.20261 9.32243 5.20261C9.89237 5.20261 10.6658 5.16205 11.0323 5.16205C11.6836 5.16205 12.0906 5.32402 12.2128 5.89108L12.5792 7.71381C13.6783 13.1006 14.3704 18.5685 15.3474 24.0362C15.7952 26.5474 16.1208 29.0991 16.528 31.6103C16.6094 32.0558 16.65 32.4203 16.65 32.7444C16.65 33.2305 16.5686 33.595 16.0394 33.595H14.0447C13.434 33.595 12.6198 33.676 11.8057 33.676C10.8286 33.676 10.5437 33.5544 10.4623 32.8254Z" fill={textColors[color]}/>
    </svg>
  );
};

ArtBaselLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'basel', 'miami', 'hongkong', 'cities']),
  color: PropTypes.oneOf(['dark', 'white']),
};

ArtBaselLogo.defaultProps = {
  width: 115,
  height: 38,
  variant: 'default',
  color: 'dark',
};

export default ArtBaselLogo;
