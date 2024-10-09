'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Upload } from 'lucide-react'

export function CompanyRegistrationFormComponent() {
  const [logo, setLogo] = useState<File | null>(null)

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(event.target.files[0])
    }
  }

  return (
    <form className="max-w-2xl mx-auto space-y-6 p-6">
      <div>
        <Label htmlFor="companyName" className="text-red-500">* 公司/项目名称</Label>
        <Input id="companyName" placeholder="请输入" />
      </div>

      <div>
        <Label htmlFor="registeredName">工商注册全称</Label>
        <Input id="registeredName" placeholder="公司全称" />
      </div>

      <div>
        <Label htmlFor="website">公司官网</Label>
        <Input id="website" placeholder="请输入" />
      </div>

      <div>
        <Label htmlFor="logo" className="text-red-500">* 公司LOGO</Label>
        <div className="border-2 border-dashed rounded-md p-4 text-center">
          {logo ? (
            <div>
              <p>{logo.name}</p>
              <Button onClick={() => setLogo(null)}>移除</Button>
            </div>
          ) : (
            <div>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2">将LOGO拖到此处，或<label htmlFor="logo-upload" className="text-blue-500 cursor-pointer">点击上传</label></p>
              <p className="text-sm text-gray-500">请尽量使用白底300*300px<br />文件大小请限制在500k以内</p>
              <input id="logo-upload" type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
            </div>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="establishmentDate" className="text-red-500">* 成立时间</Label>
        <div className="relative">
          <Input id="establishmentDate" placeholder="请选择" />
          <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="text-red-500">* 公司地点</div>
      <div className="grid grid-cols-3 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择国内/国外" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="domestic">国内</SelectItem>
            <SelectItem value="overseas">国外</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择省/市" />
          </SelectTrigger>
          <SelectContent>
            {/* Add provinces/cities here */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择市/区" />
          </SelectTrigger>
          <SelectContent>
            {/* Add districts here */}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="investmentStatus">获投状态</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              {/* Add investment statuses here */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="operatingStatus">运营状态</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              {/* Add operating statuses here */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-red-500">* 公司领域</div>
      <div className="grid grid-cols-2 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择" />
          </SelectTrigger>
          <SelectContent>
            {/* Add primary industries here */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择" />
          </SelectTrigger>
          <SelectContent>
            {/* Add secondary industries here */}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="companyIntro" className="text-red-500">* 公司简介</Label>
        <Textarea id="companyIntro" placeholder="请客观描述公司市场定位，主营业务，产品，目标客户等信息" rows={4} />
      </div>

      <Button type="submit" className="w-full">提交</Button>
    </form>
  )
}