import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { PenIcon, DiscIcon, PhoneIcon, ChevronDownIcon } from "lucide-react"

export default function UserProfileComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">用户资料</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder.svg" alt="用户头像" />
            <AvatarFallback>晓明</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            <PenIcon className="w-4 h-4 mr-2" />
            编辑
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <div className="flex items-center">
              <Input id="username" value="lininruc5968" readOnly className="flex-grow" />
              <Button variant="ghost" size="sm" className="ml-2">
                <PenIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">电子邮件</Label>
            <Input id="email" value="lininruc@gmail.com" readOnly />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>AI 数据保留</Label>
              <p className="text-sm text-muted-foreground">
                此功能允许我们使用您的搜索数据来改进我们的 AI 模型。如果您希望从此过程中排除您的数据，请关闭此设置。
              </p>
            </div>
            <Switch />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">订阅</h3>
            <Button variant="outline">管理订阅</Button>
          </div>

          <div className="space-y-2">
            <Label>AI 模型</Label>
            <Select defaultValue="claude">
              <SelectTrigger>
                <SelectValue placeholder="选择 AI 模型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
                <SelectItem value="gpt4">GPT-4</SelectItem>
                <SelectItem value="sonar">Sonar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>图像生成模型</Label>
            <Select defaultValue="flux">
              <SelectTrigger>
                <SelectValue placeholder="选择图像生成模型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flux">FLUX.1</SelectItem>
                <SelectItem value="dalle">DALL-E</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <DiscIcon className="w-5 h-5 mr-2" />
              Pro Discord
            </div>
            加入
          </Button>

          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Pro 支持
            </div>
            联系
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">推荐</h3>
            <p className="text-sm text-muted-foreground">成功的: 3</p>
          </div>
          <Button variant="outline">推荐给朋友</Button>
        </div>
      </CardContent>
    </Card>
  )
}