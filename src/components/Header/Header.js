import React from "react";
import account from '../../img/search.png';
import wishlist from '../../img/wishlist.png';
import card from '../../img/card.png';
import classes from './Header.module.scss';


class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.top_header}>
         
            <div className={classes.selects}> 
              <select name="currency" id="currency"> 
                <option value="usd">USD</option>
                <option value="hrn">HRN</option>
              </select>
              <select name="lang" id="lang">
                <option value="eng">English</option>
                <option value="ua">Ukrainian</option>
              </select>
            </div>
            <div>
            🔥  Only 11 days left until VALENTINE'S DAY!  🔥
            </div>
            <div className={classes.top_header_links}>
              <a href="/">Help & Information</a>
              <a href="/">Connect with us</a> 
            </div>


          
          </div>
          <div>
            <div>
              <div className={classes.main}>
                <div className={classes.main_div}>
                  <input className={classes.search} type="search" id="search" name="q" placeholder="Hey, what are you looking for?" />
                </div> 
                <div className={classes.main_div}>
                  <a className={classes.logo} href="http://localhost:3000/">  
                    <svg width="289" height="40" viewBox="0 0 289 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.12119 38.4935C4.0315 38.3069 4.94181 38.0936 6.06019 37.8537C5.56603 37.5072 5.25392 37.2672 4.94181 37.054C-2.1586 32.0423 -1.48237 21.2725 6.16423 17.2205C6.9705 16.794 7.30862 16.3408 7.2566 15.4078C7.17857 14.1815 7.28261 12.9286 7.23059 11.6757C7.17857 10.6094 7.62073 9.9429 8.45301 9.38309C9.10323 8.95656 9.67542 8.39675 10.2736 7.9169C8.63507 6.10417 8.66108 4.95788 10.4297 3.6783C10.2476 3.41172 10.0656 3.14514 9.8835 2.90522C10.0916 1.89222 11.47 1.89222 12.7445 2.90522C12.5624 3.11848 12.3803 3.35841 12.1983 3.57167C13.8108 5.27777 14.279 5.27777 15.8135 3.59833C17.7642 1.4657 23.4601 0.266091 26.035 1.49235C27.7256 2.31875 29 3.54501 29 5.62433C29 7.35709 27.7256 9.06319 25.7229 9.67632C22.1857 10.7693 18.9086 9.88959 16.0476 7.67698C14.0189 6.10417 14.1229 5.94422 12.3023 7.9169C12.7185 8.29011 13.0826 8.84993 13.5768 9.00988C15.1113 9.56969 15.4494 10.716 15.3193 12.1822C15.3193 12.2355 15.3193 12.2621 15.3193 12.3155C15.0593 14.9546 15.0593 17.4604 18.1803 18.4201C24.2144 23.2452 23.9803 32.5488 17.7122 37.054C17.4001 37.2672 17.0879 37.5072 16.5158 37.8804C17.9462 38.2003 19.1426 38.4668 20.3391 38.7334C20.3391 38.8134 20.313 38.8934 20.313 39C14.6171 39 8.89516 39 3.19922 39C3.17321 38.8134 3.1472 38.6534 3.12119 38.4935Z" fill="#4D2952"/>
                    <path d="M42.744 25.32C42.3813 25.32 42.0933 25.2133 41.88 25C41.6667 24.7653 41.56 24.4453 41.56 24.04V6.44C41.56 5.24533 41.912 4.30667 42.616 3.624C43.3413 2.94133 44.344 2.6 45.624 2.6H51.064C57.144 2.6 60.184 5.14933 60.184 10.248C60.184 12.5947 59.4053 14.408 57.848 15.688C56.312 16.9467 54.0933 17.576 51.192 17.576H43.96V24.04C43.96 24.4453 43.8533 24.7653 43.64 25C43.4267 25.2133 43.128 25.32 42.744 25.32ZM51.192 15.56C53.2613 15.56 54.8613 15.1547 55.992 14.344C57.144 13.5333 57.72 12.168 57.72 10.248C57.72 8.24267 57.1653 6.80267 56.056 5.928C54.9467 5.032 53.336 4.584 51.224 4.584H45.656C45.144 4.584 44.728 4.75467 44.408 5.096C44.1093 5.43733 43.96 5.88533 43.96 6.44V15.56H51.192ZM70.58 25.32C67.8067 25.32 65.6627 24.6053 64.148 23.176C62.6333 21.7467 61.876 19.72 61.876 17.096C61.876 14.5787 62.644 12.6053 64.18 11.176C65.716 9.72533 67.8173 9 70.484 9C72.1267 9 73.588 9.26667 74.868 9.8C76.148 10.312 77.14 11.048 77.844 12.008C78.5693 12.9467 78.932 14.024 78.932 15.24C78.932 16.136 78.676 16.8293 78.164 17.32C77.6733 17.8107 76.9907 18.056 76.116 18.056H64.276C64.276 19.6987 64.8307 20.9893 65.94 21.928C67.0493 22.8453 68.596 23.304 70.58 23.304C71.796 23.304 72.8413 23.176 73.716 22.92C74.5907 22.6427 75.412 22.2053 76.18 21.608C76.5853 21.2667 76.916 21.096 77.172 21.096C77.364 21.096 77.5453 21.1813 77.716 21.352C78.0147 21.608 78.164 21.8747 78.164 22.152C78.164 22.3653 78.036 22.6 77.78 22.856C76.9053 23.688 75.8813 24.3067 74.708 24.712C73.5347 25.1173 72.1587 25.32 70.58 25.32ZM75.412 16.168C75.796 16.168 76.084 16.0933 76.276 15.944C76.468 15.7733 76.564 15.4747 76.564 15.048C76.564 14.28 76.308 13.5867 75.796 12.968C75.284 12.3493 74.5587 11.8693 73.62 11.528C72.7027 11.1867 71.6573 11.016 70.484 11.016C68.5853 11.016 67.0813 11.4853 65.972 12.424C64.884 13.3413 64.34 14.5893 64.34 16.168H75.412ZM83.7365 25.32C83.3738 25.32 83.0858 25.2133 82.8725 25C82.6805 24.7653 82.5845 24.4453 82.5845 24.04V10.28C82.5845 9.87467 82.6805 9.56533 82.8725 9.352C83.0645 9.11733 83.3525 9 83.7365 9C84.0992 9 84.3765 9.11733 84.5685 9.352C84.7818 9.56533 84.8885 9.87467 84.8885 10.28V12.2C86.3392 10.28 88.3445 9.32 90.9045 9.32H91.7045C92.1098 9.32 92.4298 9.416 92.6645 9.608C92.8992 9.77867 93.0165 10.024 93.0165 10.344C93.0165 10.664 92.8992 10.9093 92.6645 11.08C92.4298 11.2507 92.1098 11.336 91.7045 11.336H90.8085C88.9952 11.336 87.5552 11.8587 86.4885 12.904C85.4432 13.928 84.9205 15.3253 84.9205 17.096V24.04C84.9205 24.424 84.8138 24.7333 84.6005 24.968C84.4085 25.2027 84.1205 25.32 83.7365 25.32ZM106.177 2.792C106.39 2.984 106.497 3.21866 106.497 3.496C106.497 3.77333 106.379 4.02933 106.145 4.264C105.931 4.43467 105.729 4.52 105.537 4.52C105.259 4.52 104.886 4.38133 104.417 4.104C103.649 3.656 102.827 3.432 101.953 3.432C100.374 3.432 99.5845 4.28533 99.5845 5.992V9.32H104.129C104.961 9.32 105.377 9.65067 105.377 10.312C105.377 10.6107 105.27 10.8453 105.057 11.016C104.843 11.1867 104.534 11.272 104.129 11.272H99.5845V24.04C99.5845 24.4453 99.4778 24.7653 99.2645 25C99.0725 25.2133 98.7952 25.32 98.4325 25.32C98.0698 25.32 97.7818 25.2133 97.5685 25C97.3552 24.7653 97.2485 24.4453 97.2485 24.04V11.272H95.7125C95.3072 11.272 94.9872 11.1867 94.7525 11.016C94.5392 10.8453 94.4325 10.6107 94.4325 10.312C94.4325 9.65067 94.8592 9.32 95.7125 9.32H97.2485V6.12C97.2485 4.69067 97.6645 3.54933 98.4965 2.696C99.3498 1.82133 100.47 1.384 101.857 1.384C102.731 1.384 103.542 1.512 104.289 1.768C105.035 2.00267 105.665 2.344 106.177 2.792ZM114.894 25.32C112.803 25.32 111.16 24.7227 109.966 23.528C108.792 22.3333 108.206 20.6693 108.206 18.536V10.28C108.206 9.87467 108.312 9.56533 108.526 9.352C108.739 9.11733 109.027 9 109.39 9C109.752 9 110.03 9.11733 110.222 9.352C110.435 9.56533 110.542 9.87467 110.542 10.28V18.536C110.542 20.0507 110.947 21.224 111.758 22.056C112.568 22.888 113.699 23.304 115.15 23.304C116.302 23.304 117.326 23.048 118.222 22.536C119.118 22.024 119.811 21.3093 120.302 20.392C120.814 19.4747 121.07 18.4187 121.07 17.224V10.28C121.07 9.87467 121.166 9.56533 121.358 9.352C121.571 9.11733 121.87 9 122.254 9C122.616 9 122.894 9.11733 123.086 9.352C123.299 9.56533 123.406 9.87467 123.406 10.28V24.04C123.406 24.4453 123.299 24.7653 123.086 25C122.894 25.2133 122.616 25.32 122.254 25.32C121.87 25.32 121.571 25.2027 121.358 24.968C121.166 24.7333 121.07 24.424 121.07 24.04V22.152C120.28 23.176 119.363 23.9653 118.318 24.52C117.272 25.0533 116.131 25.32 114.894 25.32ZM129.016 25.32C128.654 25.32 128.366 25.2133 128.152 25C127.96 24.7653 127.864 24.4453 127.864 24.04V10.28C127.864 9.87467 127.96 9.56533 128.152 9.352C128.366 9.11733 128.654 9 129.016 9C129.4 9 129.688 9.11733 129.88 9.352C130.094 9.58667 130.2 9.896 130.2 10.28V12.104C130.776 11.144 131.512 10.3867 132.408 9.832C133.326 9.27733 134.286 9 135.288 9C136.291 9 137.176 9.27733 137.944 9.832C138.712 10.3653 139.278 11.1227 139.64 12.104C140.387 11.1013 141.208 10.3333 142.104 9.8C143.022 9.26667 143.971 9 144.952 9C146.638 9 147.907 9.52267 148.76 10.568C149.614 11.592 150.04 13.1173 150.04 15.144V24.04C150.04 24.4453 149.934 24.7653 149.72 25C149.507 25.2133 149.219 25.32 148.856 25.32C148.088 25.32 147.704 24.8933 147.704 24.04V15.08C147.704 13.7147 147.47 12.7013 147 12.04C146.552 11.3573 145.774 11.016 144.664 11.016C143.726 11.016 142.883 11.304 142.136 11.88C141.39 12.4347 140.792 13.2453 140.344 14.312V24.04C140.344 24.4453 140.238 24.7653 140.024 25C139.811 25.2133 139.523 25.32 139.16 25.32C138.798 25.32 138.51 25.2133 138.296 25C138.104 24.7653 138.008 24.4453 138.008 24.04V15.56C138.008 14.088 137.742 12.968 137.208 12.2C136.696 11.4107 135.96 11.016 135 11.016C134.083 11.016 133.262 11.272 132.536 11.784C131.811 12.2747 131.235 12.9573 130.808 13.832C130.403 14.7067 130.2 15.6987 130.2 16.808V24.04C130.2 24.424 130.094 24.7333 129.88 24.968C129.688 25.2027 129.4 25.32 129.016 25.32ZM162.143 25.32C159.369 25.32 157.225 24.6053 155.711 23.176C154.196 21.7467 153.439 19.72 153.439 17.096C153.439 14.5787 154.207 12.6053 155.743 11.176C157.279 9.72533 159.38 9 162.047 9C163.689 9 165.151 9.26667 166.431 9.8C167.711 10.312 168.703 11.048 169.407 12.008C170.132 12.9467 170.495 14.024 170.495 15.24C170.495 16.136 170.239 16.8293 169.727 17.32C169.236 17.8107 168.553 18.056 167.679 18.056H155.839C155.839 19.6987 156.393 20.9893 157.503 21.928C158.612 22.8453 160.159 23.304 162.143 23.304C163.359 23.304 164.404 23.176 165.279 22.92C166.153 22.6427 166.975 22.2053 167.743 21.608C168.148 21.2667 168.479 21.096 168.735 21.096C168.927 21.096 169.108 21.1813 169.279 21.352C169.577 21.608 169.727 21.8747 169.727 22.152C169.727 22.3653 169.599 22.6 169.343 22.856C168.468 23.688 167.444 24.3067 166.271 24.712C165.097 25.1173 163.721 25.32 162.143 25.32ZM166.975 16.168C167.359 16.168 167.647 16.0933 167.839 15.944C168.031 15.7733 168.127 15.4747 168.127 15.048C168.127 14.28 167.871 13.5867 167.359 12.968C166.847 12.3493 166.121 11.8693 165.183 11.528C164.265 11.1867 163.22 11.016 162.047 11.016C160.148 11.016 158.644 11.4853 157.535 12.424C156.447 13.3413 155.903 14.5893 155.903 16.168H166.975ZM183.555 25.32C181.507 25.32 179.619 24.9787 177.891 24.296C176.184 23.592 174.851 22.632 173.891 21.416C173.72 21.2027 173.635 20.9787 173.635 20.744C173.635 20.4453 173.795 20.1573 174.115 19.88C174.286 19.752 174.467 19.688 174.659 19.688C175.043 19.688 175.384 19.8693 175.683 20.232C176.558 21.192 177.656 21.9387 178.979 22.472C180.323 22.984 181.848 23.24 183.555 23.24C185.432 23.24 186.883 22.8987 187.907 22.216C188.931 21.512 189.443 20.52 189.443 19.24C189.443 18.1307 188.942 17.2347 187.939 16.552C186.958 15.8693 185.283 15.2613 182.915 14.728C179.822 14.0453 177.592 13.192 176.227 12.168C174.883 11.1227 174.211 9.74667 174.211 8.04C174.211 6.26933 174.958 4.872 176.451 3.848C177.966 2.80267 180.003 2.28 182.563 2.28C184.504 2.28 186.254 2.62133 187.811 3.304C189.39 3.98667 190.51 4.904 191.171 6.056C191.299 6.26933 191.363 6.472 191.363 6.664C191.363 7.00533 191.182 7.304 190.819 7.56C190.67 7.64533 190.499 7.688 190.307 7.688C189.838 7.688 189.475 7.50667 189.219 7.144C188.6 6.248 187.726 5.56533 186.595 5.096C185.464 4.60533 184.12 4.36 182.563 4.36C178.616 4.36 176.643 5.58667 176.643 8.04C176.643 8.78667 176.846 9.416 177.251 9.928C177.656 10.4187 178.307 10.8667 179.203 11.272C180.12 11.656 181.39 12.04 183.011 12.424C186.168 13.1707 188.44 14.0773 189.827 15.144C191.214 16.1893 191.907 17.5547 191.907 19.24C191.907 21.1173 191.15 22.6 189.635 23.688C188.142 24.776 186.115 25.32 183.555 25.32ZM197.08 25.32C196.718 25.32 196.43 25.2133 196.216 25C196.024 24.7653 195.928 24.4453 195.928 24.04V1.992C195.928 1.58667 196.024 1.27733 196.216 1.064C196.43 0.829332 196.718 0.711998 197.08 0.711998C197.443 0.711998 197.731 0.829332 197.944 1.064C198.158 1.27733 198.264 1.58667 198.264 1.992V12.168C199.054 11.1227 200.003 10.3333 201.112 9.8C202.243 9.26667 203.47 9 204.792 9C206.819 9 208.376 9.56533 209.464 10.696C210.574 11.8267 211.128 13.448 211.128 15.56V24.04C211.128 24.4453 211.022 24.7653 210.808 25C210.595 25.2133 210.307 25.32 209.944 25.32C209.56 25.32 209.272 25.2133 209.08 25C208.888 24.7653 208.792 24.4453 208.792 24.04V15.56C208.792 12.5307 207.363 11.016 204.504 11.016C202.627 11.016 201.112 11.5707 199.96 12.68C198.83 13.7893 198.264 15.2613 198.264 17.096V24.04C198.264 24.424 198.158 24.7333 197.944 24.968C197.752 25.2027 197.464 25.32 197.08 25.32ZM222.958 25.32C221.102 25.32 219.513 24.9467 218.19 24.2C216.867 23.4533 215.865 22.4613 215.182 21.224C214.521 19.9653 214.19 18.6107 214.19 17.16C214.19 15.7093 214.521 14.3653 215.182 13.128C215.865 11.8693 216.867 10.8667 218.19 10.12C219.513 9.37333 221.102 9 222.958 9C224.814 9 226.393 9.37333 227.694 10.12C229.017 10.8667 230.009 11.8693 230.67 13.128C231.353 14.3653 231.694 15.7093 231.694 17.16C231.694 18.6107 231.353 19.9653 230.67 21.224C230.009 22.4613 229.017 23.4533 227.694 24.2C226.393 24.9467 224.814 25.32 222.958 25.32ZM222.958 23.304C224.878 23.304 226.414 22.76 227.566 21.672C228.739 20.584 229.326 19.08 229.326 17.16C229.326 15.24 228.739 13.736 227.566 12.648C226.414 11.56 224.878 11.016 222.958 11.016C221.017 11.016 219.459 11.56 218.286 12.648C217.134 13.736 216.558 15.24 216.558 17.16C216.558 19.08 217.134 20.584 218.286 21.672C219.459 22.76 221.017 23.304 222.958 23.304ZM236.485 34.568C236.122 34.568 235.834 34.4507 235.621 34.216C235.429 34.0027 235.333 33.6933 235.333 33.288V10.28C235.333 9.87467 235.429 9.56533 235.621 9.352C235.834 9.11733 236.122 9 236.485 9C236.869 9 237.157 9.11733 237.349 9.352C237.562 9.58667 237.669 9.896 237.669 10.28V12.328C239.312 10.1093 241.68 9 244.773 9C247.354 9 249.381 9.71467 250.853 11.144C252.346 12.5733 253.093 14.536 253.093 17.032C253.093 18.7173 252.752 20.1893 252.069 21.448C251.386 22.6853 250.405 23.6453 249.125 24.328C247.866 24.9893 246.384 25.32 244.677 25.32C243.205 25.32 241.904 25.064 240.773 24.552C239.664 24.0187 238.64 23.1867 237.701 22.056V33.288C237.701 33.672 237.594 33.9813 237.381 34.216C237.168 34.4507 236.869 34.568 236.485 34.568ZM244.517 23.304C246.458 23.304 247.973 22.7493 249.061 21.64C250.17 20.5093 250.725 18.952 250.725 16.968C250.725 15.048 250.181 13.576 249.093 12.552C248.026 11.528 246.49 11.016 244.485 11.016C242.373 11.016 240.709 11.56 239.493 12.648C238.277 13.7147 237.669 15.176 237.669 17.032C237.669 18.2693 237.946 19.368 238.501 20.328C239.077 21.2667 239.877 22.0027 240.901 22.536C241.946 23.048 243.152 23.304 244.517 23.304Z" fill="#4D2952"/>
                    <path d="M256.582 25.126C256.302 25.126 256.069 25.0373 255.882 24.86C255.695 24.6733 255.602 24.44 255.602 24.16C255.602 23.8893 255.695 23.6607 255.882 23.474C256.078 23.278 256.311 23.18 256.582 23.18C256.853 23.18 257.086 23.278 257.282 23.474C257.478 23.6607 257.576 23.8893 257.576 24.16C257.576 24.4307 257.478 24.6593 257.282 24.846C257.086 25.0327 256.853 25.126 256.582 25.126ZM261.952 25.126C261.374 25.126 260.856 25.0233 260.398 24.818C259.95 24.6033 259.6 24.3093 259.348 23.936C259.096 23.5533 258.97 23.1193 258.97 22.634V20.464C258.97 19.96 259.092 19.512 259.334 19.12C259.586 18.728 259.936 18.4247 260.384 18.21C260.842 17.986 261.36 17.874 261.938 17.874C262.48 17.874 262.96 17.9533 263.38 18.112C263.8 18.2613 264.127 18.476 264.36 18.756C264.603 19.036 264.724 19.358 264.724 19.722C264.724 19.9833 264.617 20.1933 264.402 20.352C264.188 20.5013 263.917 20.5667 263.59 20.548C263.59 20.1187 263.436 19.7687 263.128 19.498C262.83 19.2273 262.442 19.092 261.966 19.092C261.49 19.092 261.103 19.2227 260.804 19.484C260.506 19.7453 260.356 20.086 260.356 20.506V22.55C260.356 22.9513 260.506 23.278 260.804 23.53C261.112 23.782 261.509 23.908 261.994 23.908C262.47 23.908 262.858 23.7727 263.156 23.502C263.464 23.2313 263.618 22.886 263.618 22.466C263.954 22.438 264.23 22.4987 264.444 22.648C264.659 22.7973 264.766 23.0027 264.766 23.264C264.766 23.628 264.645 23.95 264.402 24.23C264.169 24.51 263.838 24.7293 263.408 24.888C262.979 25.0467 262.494 25.126 261.952 25.126ZM268.676 25.126C268.088 25.126 267.561 25.0187 267.094 24.804C266.627 24.5893 266.259 24.2953 265.988 23.922C265.727 23.5393 265.596 23.1147 265.596 22.648V20.45C265.596 19.974 265.727 19.54 265.988 19.148C266.249 18.756 266.613 18.448 267.08 18.224C267.547 17.9907 268.079 17.874 268.676 17.874C269.273 17.874 269.805 17.9907 270.272 18.224C270.739 18.448 271.103 18.756 271.364 19.148C271.635 19.54 271.77 19.974 271.77 20.45V22.648C271.77 23.1147 271.635 23.5393 271.364 23.922C271.103 24.2953 270.734 24.5893 270.258 24.804C269.791 25.0187 269.264 25.126 268.676 25.126ZM268.676 23.922C269.208 23.922 269.628 23.8007 269.936 23.558C270.244 23.306 270.398 22.9747 270.398 22.564V20.506C270.398 20.0767 270.239 19.7313 269.922 19.47C269.614 19.2087 269.199 19.078 268.676 19.078C268.153 19.078 267.733 19.2087 267.416 19.47C267.108 19.7313 266.954 20.0767 266.954 20.506V22.564C266.954 22.9747 267.108 23.306 267.416 23.558C267.724 23.8007 268.144 23.922 268.676 23.922ZM273.205 19.008C273.205 18.252 273.649 17.874 274.535 17.874V18.756C274.442 18.8493 274.339 18.98 274.227 19.148L274.297 19.204C274.596 18.7747 274.909 18.448 275.235 18.224C275.562 17.9907 275.949 17.874 276.397 17.874C277.237 17.874 277.811 18.2753 278.119 19.078C278.642 18.2753 279.351 17.874 280.247 17.874C280.901 17.874 281.409 18.098 281.773 18.546C282.147 18.994 282.333 19.5773 282.333 20.296V24.174C282.333 24.5007 282.217 24.7433 281.983 24.902C281.759 25.0513 281.414 25.126 280.947 25.126V20.394C280.947 19.5073 280.588 19.064 279.869 19.064C279.477 19.064 279.141 19.1993 278.861 19.47C278.591 19.7313 278.455 20.1 278.455 20.576V24.174C278.455 24.51 278.343 24.7527 278.119 24.902C277.895 25.0513 277.555 25.126 277.097 25.126V20.394C277.097 19.9833 277.009 19.6613 276.831 19.428C276.654 19.1853 276.379 19.064 276.005 19.064C275.595 19.064 275.254 19.2133 274.983 19.512C274.722 19.8013 274.591 20.17 274.591 20.618V24.174C274.591 24.5007 274.475 24.7433 274.241 24.902C274.017 25.0513 273.672 25.126 273.205 25.126V19.008Z" fill="#4D2952"/>
                    <path d="M42.828 32.015V39H41.827V32.015H39.231V31.124H45.402V32.015H42.828ZM48.3677 35.612V39H47.3667V31.124H50.9857C51.8217 31.124 52.445 31.3293 52.8557 31.74C53.215 32.0993 53.3947 32.598 53.3947 33.236C53.3947 33.6833 53.2957 34.0537 53.0977 34.347C52.907 34.6403 52.588 34.897 52.1407 35.117C52.5 35.2563 52.764 35.4433 52.9327 35.678C53.1014 35.92 53.1967 36.415 53.2187 37.163C53.2334 37.713 53.2664 38.0833 53.3177 38.274C53.3764 38.4573 53.501 38.615 53.6917 38.747V39H52.4817C52.3204 38.6627 52.2397 38.307 52.2397 37.933L52.2507 36.701C52.2507 36.6203 52.2177 36.4957 52.1517 36.327C52.0857 36.1583 52.0234 36.0373 51.9647 35.964C51.7667 35.7293 51.4294 35.612 50.9527 35.612H48.3677ZM48.3677 34.721H50.7987C51.8327 34.721 52.3497 34.27 52.3497 33.368C52.3497 32.466 51.8327 32.015 50.7987 32.015H48.3677V34.721ZM60.8965 31.124H61.8975V36.525C61.8975 37.3757 61.5859 38.0357 60.9625 38.505C60.4272 38.9157 59.7269 39.121 58.8615 39.121C57.8642 39.121 57.0942 38.8607 56.5515 38.34C56.0822 37.878 55.8475 37.273 55.8475 36.525V31.124H56.8485V36.525C56.8485 37.0677 57.0245 37.4893 57.3765 37.79C57.7285 38.0833 58.2235 38.23 58.8615 38.23C59.5362 38.23 60.0569 38.0613 60.4235 37.724C60.7389 37.4233 60.8965 37.0237 60.8965 36.525V31.124ZM69.9384 33.39H68.9924C68.9704 32.3633 68.314 31.85 67.0234 31.85C66.4954 31.85 66.07 31.971 65.7474 32.213C65.4247 32.4477 65.2634 32.7593 65.2634 33.148C65.2634 33.4413 65.3587 33.676 65.5494 33.852C65.7474 34.0207 66.0847 34.1673 66.5614 34.292L68.4314 34.776C69.6194 35.0913 70.2134 35.7513 70.2134 36.756C70.2134 37.482 69.9237 38.0723 69.3444 38.527C68.831 38.923 68.094 39.121 67.1334 39.121C65.916 39.121 65.0324 38.7543 64.4824 38.021C64.189 37.625 64.035 37.0933 64.0204 36.426H64.9664V36.448C64.9664 37.02 65.1607 37.4637 65.5494 37.779C65.9454 38.087 66.4954 38.241 67.1994 38.241C67.8447 38.241 68.325 38.1347 68.6404 37.922C69.0144 37.6653 69.2014 37.306 69.2014 36.844C69.2014 36.2573 68.721 35.843 67.7604 35.601L65.8024 35.095C64.7757 34.831 64.2624 34.226 64.2624 33.28C64.2624 32.532 64.5447 31.9527 65.1094 31.542C65.6007 31.1827 66.2497 31.003 67.0564 31.003C68.2004 31.003 69.018 31.3367 69.5094 32.004C69.7954 32.3927 69.9384 32.8143 69.9384 33.269C69.9384 33.291 69.9384 33.3313 69.9384 33.39ZM75.3094 32.015V39H74.3084V32.015H71.7124V31.124H77.8834V32.015H75.3094ZM80.8161 35.414V38.109H85.4581V39H79.8151V31.124H85.2711V32.015H80.8161V34.523H85.1061V35.414H80.8161ZM87.7821 39V31.124H90.8181C91.8814 31.124 92.6991 31.52 93.2711 32.312C93.7697 33.0087 94.0191 33.9253 94.0191 35.062C94.0191 36.3673 93.6964 37.372 93.0511 38.076C92.4864 38.692 91.7421 39 90.8181 39H87.7821ZM88.7831 38.109H90.6421C92.2261 38.109 93.0181 37.0933 93.0181 35.062C93.0181 33.0307 92.2261 32.015 90.6421 32.015H88.7831V38.109ZM102.396 31.003C103.614 31.003 104.574 31.4247 105.278 32.268C105.887 33.0013 106.191 33.9327 106.191 35.062C106.191 36.36 105.799 37.3867 105.014 38.142C104.325 38.7947 103.452 39.121 102.396 39.121C101.172 39.121 100.207 38.6993 99.5034 37.856C98.8948 37.1227 98.5904 36.1913 98.5904 35.062C98.5904 33.764 98.9864 32.7373 99.7784 31.982C100.46 31.3293 101.333 31.003 102.396 31.003ZM102.385 31.894C101.491 31.894 100.783 32.2203 100.262 32.873C99.8151 33.445 99.5914 34.1747 99.5914 35.062C99.5914 36.0813 99.8811 36.8843 100.46 37.471C100.966 37.977 101.608 38.23 102.385 38.23C103.287 38.23 103.999 37.9037 104.519 37.251C104.967 36.679 105.19 35.9493 105.19 35.062C105.19 34.0427 104.901 33.2397 104.321 32.653C103.815 32.147 103.17 31.894 102.385 31.894ZM114.328 31.124V39H113.206L109.125 32.609V39H108.179V31.124H109.268L113.382 37.559V31.124H114.328ZM117.793 31.124V38.109H121.676V39H116.792V31.124H117.793ZM124.799 31.124V39H123.776V31.124H124.799ZM133.449 31.124V39H132.327L128.246 32.609V39H127.3V31.124H128.389L132.503 37.559V31.124H133.449ZM137.013 35.414V38.109H141.655V39H136.012V31.124H141.468V32.015H137.013V34.523H141.303V35.414H137.013ZM152.247 33.39H151.301C151.279 32.3633 150.622 31.85 149.332 31.85C148.804 31.85 148.378 31.971 148.056 32.213C147.733 32.4477 147.572 32.7593 147.572 33.148C147.572 33.4413 147.667 33.676 147.858 33.852C148.056 34.0207 148.393 34.1673 148.87 34.292L150.74 34.776C151.928 35.0913 152.522 35.7513 152.522 36.756C152.522 37.482 152.232 38.0723 151.653 38.527C151.139 38.923 150.402 39.121 149.442 39.121C148.224 39.121 147.341 38.7543 146.791 38.021C146.497 37.625 146.343 37.0933 146.329 36.426H147.275V36.448C147.275 37.02 147.469 37.4637 147.858 37.779C148.254 38.087 148.804 38.241 149.508 38.241C150.153 38.241 150.633 38.1347 150.949 37.922C151.323 37.6653 151.51 37.306 151.51 36.844C151.51 36.2573 151.029 35.843 150.069 35.601L148.111 35.095C147.084 34.831 146.571 34.226 146.571 33.28C146.571 32.532 146.853 31.9527 147.418 31.542C147.909 31.1827 148.558 31.003 149.365 31.003C150.509 31.003 151.326 31.3367 151.818 32.004C152.104 32.3927 152.247 32.8143 152.247 33.269C152.247 33.291 152.247 33.3313 152.247 33.39ZM155.891 31.124V39H154.868V31.124H155.891ZM164.542 31.124V39H163.42L159.339 32.609V39H158.393V31.124H159.482L163.596 37.559V31.124H164.542ZM173.286 33.533H172.252C172.142 33.005 171.952 32.62 171.68 32.378C171.328 32.0553 170.815 31.894 170.14 31.894C169.319 31.894 168.685 32.2167 168.237 32.862C167.849 33.4267 167.654 34.1673 167.654 35.084C167.654 36.118 167.915 36.921 168.435 37.493C168.897 37.9843 169.491 38.23 170.217 38.23C171.105 38.23 171.717 37.9037 172.054 37.251C172.208 36.9503 172.329 36.5507 172.417 36.052H173.451C173.209 38.098 172.135 39.121 170.228 39.121C169.202 39.121 168.391 38.8203 167.797 38.219C167.035 37.449 166.653 36.415 166.653 35.117C166.653 33.8557 167.02 32.818 167.753 32.004C168.355 31.3367 169.183 31.003 170.239 31.003C171.955 31.003 172.971 31.8463 173.286 33.533ZM176.674 35.414V38.109H181.316V39H175.673V31.124H181.129V32.015H176.674V34.523H180.964V35.414H176.674ZM188.619 31.124V38.582L188.146 39H187.684V32.246L186.32 33.39L185.825 32.774L187.783 31.124H188.619ZM194.388 35.095C193.963 35.6963 193.409 35.997 192.727 35.997C191.986 35.997 191.422 35.7293 191.033 35.194C190.718 34.7613 190.56 34.2113 190.56 33.544C190.56 32.7373 190.795 32.103 191.264 31.641C191.682 31.2157 192.236 31.003 192.925 31.003C193.944 31.003 194.634 31.465 194.993 32.389C195.22 32.9463 195.334 33.742 195.334 34.776C195.334 37.658 194.311 39.099 192.265 39.099C192.082 39.099 191.843 39.0843 191.55 39.055L191.198 38.604V38.274C191.491 38.318 191.741 38.34 191.946 38.34C192.826 38.34 193.446 38.1017 193.805 37.625C194.164 37.141 194.359 36.2977 194.388 35.095ZM192.914 31.85C192.437 31.85 192.067 32.0517 191.803 32.455C191.605 32.7703 191.506 33.148 191.506 33.588C191.506 34.0573 191.631 34.446 191.88 34.754C192.129 35.0547 192.445 35.205 192.826 35.205C193.266 35.205 193.622 35.062 193.893 34.776C194.164 34.49 194.3 34.1197 194.3 33.665C194.3 32.455 193.838 31.85 192.914 31.85ZM200.787 35.095C200.361 35.6963 199.808 35.997 199.126 35.997C198.385 35.997 197.82 35.7293 197.432 35.194C197.116 34.7613 196.959 34.2113 196.959 33.544C196.959 32.7373 197.193 32.103 197.663 31.641C198.081 31.2157 198.634 31.003 199.324 31.003C200.343 31.003 201.032 31.465 201.392 32.389C201.619 32.9463 201.733 33.742 201.733 34.776C201.733 37.658 200.71 39.099 198.664 39.099C198.48 39.099 198.242 39.0843 197.949 39.055L197.597 38.604V38.274C197.89 38.318 198.139 38.34 198.345 38.34C199.225 38.34 199.844 38.1017 200.204 37.625C200.563 37.141 200.757 36.2977 200.787 35.095ZM199.313 31.85C198.836 31.85 198.466 32.0517 198.202 32.455C198.004 32.7703 197.905 33.148 197.905 33.588C197.905 34.0573 198.029 34.446 198.279 34.754C198.528 35.0547 198.843 35.205 199.225 35.205C199.665 35.205 200.02 35.062 200.292 34.776C200.563 34.49 200.699 34.1197 200.699 33.665C200.699 32.455 200.237 31.85 199.313 31.85ZM208.066 31.124V31.817L205.448 38.483L204.81 39H204.238L207.098 31.916H203.281V31.124H208.066Z" fill="#585858"/>
                    </svg>
                  </a>
                </div>
                <div className={classes.main_div}>
                  <a href="/">
                    <img src={account} alt="" />
                    My Account</a>
                  <a href="/">
                    <img src={wishlist} alt="" />
                    Wishlist</a>
                  <a href="/">
                    <img src={card} alt="" /> 
                    2 items</a>
                </div>
              </div>
              <ul className={classes.list}>   
                <li><a href="/">Perfumes</a></li> 
                <li><a href="/">Brands</a></li>
                <li><a href="/">Skincare</a></li>
                <li><a href="/">Makeup</a></li>
                <li><a href="/">Haircare</a></li>
                <li><a href="/">Aromatherapy</a></li>
                <li><a href="/">Candles</a></li>
                <li><a href="/">Gifts</a></li> 
              </ul> 
            </div>
          </div>
          
        
        
        <footer className={classes.footer}>
          <div>
            <p>25% OFF - sitewide - <a href="/">click here</a></p>
            <p>or</p>
            <p>Free Shipping $100 min - <a href="/">click here</a></p> 
          </div>
          
        </footer>
      </header>
    );
  }
}

export default Header;