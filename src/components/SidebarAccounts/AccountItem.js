import classNames from 'classnames/bind';
import styles from './SidebarAccounts.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
const renderPreview = (attrs) => (
    <div className={cx('preview')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <AccountPreview />
        </PopperWrapper>
    </div>
);

function AccountItem() {
    return (
        <div>
            <HeadlessTippy
                offset={[-20, 0]}
                interactive
                delay={[800, 0]}
                hideOnClick={false}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0aa2721f235d625985b0de45c8a80e58~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=2fb18130&x-expires=1767254400&x-signature=R2fz%2BcNBORdiGXm7OSP3gMvuPug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>Quanglinh</span>
                            <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('userName')}>nguyen quang linh</span>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}
export default AccountItem;
