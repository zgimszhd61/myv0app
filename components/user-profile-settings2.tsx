"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserProfileSettings() {
  const [avatar, setAvatar] = useState('/placeholder.svg?height=100&width=100')
  const [nickname, setNickname] = useState('阿难')
  const [domain, setDomain] = useState('tdrd')
  const [location, setLocation] = useState('浙江杭州')
  const [hometown, setHometown] = useState('设置我的家乡')
  const [birthday, setBirthday] = useState('设置我的生日')
  const [hometownVisibility, setHometownVisibility] = useState('public')
  const [birthdayVisibility, setBirthdayVisibility] = useState('private')

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">基本设置</TabsTrigger>
          <TabsTrigger value="thirdParty">第三方应用授权</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <form className="space-y-6">
            <div className="flex items-center space-x-4">
              <Label htmlFor="avatar" className="w-20">头像：</Label>
              <div className="relative">
                <Image src={avatar} alt="Avatar" width={100} height={100} className="rounded" />
                <Button
                  type="button"
                  variant="link"
                  className="absolute bottom-0 right-0 text-blue-500"
                  onClick={() => document.getElementById('avatar-input')?.click()}
                >
                  更换头像
                </Button>
                <Input
                  id="avatar-input"
                  type="file"
                  className="hidden"
                  onChange={handleAvatarChange}
                  accept="image/*"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="nickname" className="w-20">昵称：</Label>
              <div className="flex-1">
                <Input
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">昵称30天内只能修改一次。</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="password" className="w-20">密码：</Label>
              <Button type="button" variant="link" className="text-blue-500">
                修改密码
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="domain" className="w-20">域名：</Label>
              <div className="flex-1">
                <Input
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">最多15个字符，字母开头，设置后不能修改。</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="location" className="w-20">常居地：</Label>
              <div className="flex-1">
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button type="button" variant="link" className="text-blue-500 mt-1">
                  搬家
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="hometown" className="w-20">家乡：</Label>
              <div className="flex-1">
                <Input
                  id="hometown"
                  value={hometown}
                  onChange={(e) => setHometown(e.target.value)}
                />
                <RadioGroup
                  value={hometownVisibility}
                  onValueChange={setHometownVisibility}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="hometown-public" />
                    <Label htmlFor="hometown-public">公开可见</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="hometown-private" />
                    <Label htmlFor="hometown-private">仅自己可见</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Label htmlFor="birthday" className="w-20">生日：</Label>
              <div className="flex-1">
                <Input
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <RadioGroup
                  value={birthdayVisibility}
                  onValueChange={setBirthdayVisibility}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="birthday-public" />
                    <Label htmlFor="birthday-public">公开可见</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="birthday-private" />
                    <Label htmlFor="birthday-private">保密</Label>
                  </div>
                </RadioGroup>
                <Button type="button" variant="link" className="text-blue-500 mt-1">
                  清空
                </Button>
              </div>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="thirdParty">
          <p>第三方应用授权设置内容</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}