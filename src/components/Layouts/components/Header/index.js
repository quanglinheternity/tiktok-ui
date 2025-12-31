import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wapper as PopperWapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import SearchAccountsItem from '~/components/SearchAccountsItem';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyborad shortcuts',
    },
];
function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);
    const hanldMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <SearchAccountsItem />
                                <SearchAccountsItem />
                                <SearchAccountsItem />
                                <SearchAccountsItem />
                            </PopperWapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hanldMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sin-sg.tiktokcdn.com/tos-alisg-avt-0068/0aa2721f235d625985b0de45c8a80e58~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=2fb18130&x-expires=1767254400&x-signature=R2fz%2BcNBORdiGXm7OSP3gMvuPug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                                alt="nguyen van a"
                                fallBack="https://yt3.googleusercontent.com/Pa8wyxqTOkhu5DW_RvkiQIS7Bsa7OW7gSen-2WpaQsC2EqUAkgubAg1_QPc951pzpN2F2Q4_TA=s160-c-k-c0x00ffffff-no-rj"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
