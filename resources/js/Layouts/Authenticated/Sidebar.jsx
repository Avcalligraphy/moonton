import {Link} from '@inertiajs/react'
import {useState, useRef} from 'react';
import SubscriptionDetail from './SubscriptionDetail';
import { UserMenu, UserOthers } from './MenuList';
import MenuItem from './MenuItem';
export default function Sidebar ({auth}) {
    // console.log(auth)
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* <!-- Menu --> */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>

                        {UserMenu.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    icon={menu.icon}
                                />
                            );
                        })}
                    </div>
                    {/* <!-- ./Menu -->

                    <!-- Others --> */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>

                        {UserOthers.map((others, index) => {
                            return (
                                <MenuItem
                                    key={`${index}-${others.text}`}
                                    link={others.link}
                                    text={others.text}
                                    isActive={
                                        others.link && route().current(others.link)
                                    }
                                    icon={others.icon}
                                    method={others.method}
                                />
                            );
                        })}
                    </div>
                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                    {/* <!-- ./Subscription details --> */}
                </div>
            </div>
        </aside>
    );
}