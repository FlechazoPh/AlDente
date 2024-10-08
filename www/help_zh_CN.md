## ChargeLimiter

&emsp;&emsp;ChargeLimiter(CL)是针对iOS开发的AlDente替代工具,适用于长时间过充情况下保护电池健康度.  
&emsp;&emsp;支持有根越狱(???-arm.deb)/无根越狱(???-arm64.deb )/巨魔(???.tipa),目前支持iOS12-17.0(注意: 巨魔环境下安装新版之前请先卸载旧版)
&emsp;&emsp;测试过的环境: iPhone6/7+iOS12/13 Checkra1n/Unc0ver/Odyssey; iPhone7/X/11+iOS15/16 Palera1n/Dopamine/TrollStore.  
&emsp;&emsp;v1.4.1功能可以满足大多数用户需求，v1.5兼容不支持停充的电池，v1.6兼容充电电流过大的电池, v1.7兼容SBC    
&emsp;&emsp;CL是开放式项目,如果有兴趣参与或者对CL有建议的的欢迎参提交代码.    
&emsp;&emsp;CL纯属偶然兴趣而开发,CL的完美运行强依赖软硬件环境, 作者没有义务保证每个人都完美使用.   如果你的软硬件环境不兼容则不建议使用.    
&emsp;&emsp;CL承诺永久免费且无广告,但因为使用CL导致系统或硬件方面的影响(或认为会有影响的)作者不负任何责任,用户使用CL即为默认同意本条款.        

## 已知BUG

* 由于缺少开发环境和设备, CL可能不兼容iOS<=11.x.
* 悬浮窗暂不支持iOS<=12.x.
* DEB版本CL可能会由于某些tweak导致启动卡屏,这并非CL本身的bug,这些tweak注入到com.apple.UIKit,可以在此目录寻找:/Library/MobileSubstrate/DynamicLibraries(有根),或/var/jb/Library/MobileSubstrate/DynamicLibraries(无根).
* 因为系统自身机制原因, 高温模拟在锁屏时失效, 这一点作者认为可行只是时间成本大, 未来有待增强. 另外高温模拟的参数定制未来也有待加入.

## 常见问题

什么情况下需要用CL?
* 手机需要长期连电源
* 手机需要整夜充电
* 充电时希望控制温度

CL更费电吗?
* 大多数用户感觉并不明显,CL的服务并不耗电,如果感觉确实耗电可以尝试关闭界面App和悬浮窗,或将更新频率调低到1分钟.

CL支持第三方电池吗?
* CL支持正版电池也支持大部分第三方品牌电池

使用CL后能增加健康度吗？
* 个人认为健康度递减是自然过程,软件更不可能直接修复硬件,有些用户使用CL前期健康度会涨. 几个月的实测发现涨跌与使用程度有关.
* 大部分使用者会明显延缓电池健康度下降速度.
* 个别用户在使用CL后出现健康度下降更快的情况,请立即停用并卸载.
* 停充且一直连电源的情况下(非禁流),理想情况下电池电流为0,健康度永久不掉.

为什么手机无法停充或恢复充电?(小白经常遇到的问题)
* CL并非傻瓜式工具,如果开启了温控请根据实际情况调整温度上下限,否则到达上限会停止充电,下限又无法达到自然无法充电.
* CL的设计思路就是减少充电次数,因此不会连着usb就充电,充电/停充都有触发条件,请仔细查看本页说明.
* 电池由于健康度低,刚启动系统时可以使用CL,一段时间后CL再也无法控制充电/停充.此种情况无法使用CL. 请注意大部分低健康度的电池仍然可以正常使用CL. 
* 电池由于过热导致硬件停充功能失效,导致CL无法生效. 而电池冷却后硬件停充功能会恢复. 请注意大部分处于高温的的电池仍然可以正常使用CL. 
* 新电池未激活则有几率导致硬件停充失效.常见品牌激活方法见本页
* 如果是iPad,如果确定充电状态正常但电量不增加,且电源显示为pd charger,可以尝试重新插拔或更换质量较好的充电线和充电头,直到电源处显示usb brick
* 巨魔环境下如果系统足够稳定, CL服务可以正常运行数月以上, 但如果iCloud半夜同步强杀进程, 或半越狱不稳定导致用户空间重启, 或其他可能导致CL服务失效的情况, 表现为一夜充满, 这并非软件Bug, CL为此提供了尽力而为的保活能力, 包括scheme/悬浮窗拉起服务. 如果你的巨魔不稳定可以使用越狱版本CL. 

我的电池&小板硬件是否支持CL停充?
* 唯一测试方式就是在关闭全局开关的情况下手动控制(开或关)"正在充电"按钮,若120秒内不变(关或开),就是电池或小板存在问题而非软件BUG,以下将硬件无法支持简称"失控"
* 从近几个月反馈来看少数电池/小板可能因为包括但不限于以下几种原因导致失控: 温度升高(温度高时失控,温度恢复时又可控)/健康度低(一直失控,或系统开机后一段时间内可控,之后失控)/电池未激活(新买电池未做激活导致有概率失控)
* 以上失控问题由于是硬件层面有问题, 如果是因为不明原因或健康度低导致的失控, 不推荐使用CL及类似工具, 可以尝试更换电池/小板解决; 电池未激活的,确定电池品牌(非软件中显示)并从官方客服获取正确激活方法激活即可;如果因为温度失控的想办法控温即可.

CL(及类似功能的软件)可以不依赖越狱或巨魔类工具吗?
* CL需要用到私有API所以无法上架.
* CL需要用到特殊签名因此无法以常规IPA方式来安装, 也无法用自签方式使用.

夏天怎样降低电池温度?
* 使用CL的Powercuff功能减少硬件用电量,充电状态下会同时降低充电功率
* 充电状态下,使用低功率充电头充电
* 购买手机散热器

怎样使用电池最好?
* 见官方文档<https://www.apple.com.cn/batteries/maximizing-performance/>
* 避免极端高温和低温使用
* 避免长时间过充
* 避免电量耗尽

如何安全的卸载CL?
* 少数用户使用常规方式卸载CL后出现无法充电的情况，需要在CL中确保"正在充电"按钮处于打开状态重新卸载

遇到问题时如何自行诊断?
* 可以参照5分钟图和日志(/var/root/aldente.log)。例如：发现5分钟图存在1小时以上的数据缺失，就可能是掉后台了。

如何找到耗电应用?
* 可以借助观察5分钟图或者Helium的实时电流数据，来检测开启某项系统功能或运行某App会增加多少电流

## 测试电池兼容性

&emsp;&emsp;在使用CL前需要测试电池兼容性,如果不支持请放弃使用
* 1.测试电池是否支持停充.关闭CL全局开关,关闭"高级"中所有选项,在“正在充电”按钮开启的状态下,手动关闭之,若120秒内按钮有反应则电池支持停充,但如果停充后有较大持续电池电流(>=5mA)则无法支持停充(有些电池返回电池电流值有误,此时以实际电量变化为准).
* 2.测试电池是否支持智能停充.开启"高级-智能停充",其余同1.
* 3.测试电池是否支持禁流.关闭CL全局开关,在“电源已连接”按钮开启的状态下,手动关闭之,若120秒内按钮有反应则电池支持禁流,但如果禁流后有较大持续电流(>=5mA)则无法支持禁流(有些电池返回电池电流值有误,此时以实际电量变化为准).
* 注意: 有的电池因为老化而健康度过低,会出现刚重启系统时可以使用上述方式停充但过一段时间就再也无法停充,这种电池也无法被CL所兼容;有的电池在温度过高时因为硬件原因无法停充,温度正常后又能正常停充. 
* 若电池既不支持停充也不支持禁流则永远不被CL支持.
* 如果使用CL过程中,健康度以不正常的方式下降,请自行调整高级菜单中的选项或卸载CL.

## 品牌新电池激活

&emsp;&emsp;电池保养官方文档: <https://www.apple.com.cn/batteries/maximizing-performance/>。电池激活是指电池刚出厂后需要采取正确方式，排除虚电并激发电池中全部的锂离子活性。建议咨询电池卖家或电池厂商获取正确激活方式，否则可能导致CL无法正常工作，常见品牌已整理在此

* 诺希: 不管开始有多少电量 ，使用到手机关机，然后进行充电，充满之后再充半小时！循环5~8天（如已充电没关系，下次再重复以上步骤即可）建议使用小电流充电器（即5V1A充电器）进行激活，因为慢充可以确保把电池容量充满，所以效果更佳。快充中间损耗的容量会较大，对激活效果有一定影响
* Dseven: 用到10%左右再开始充电，不要用到关机，充到100再多充1-2小时，如此循环充电使用5-7次之后，就会完全激发电池里面的电量
* 德赛: 新电池先把电量耗完再去充满电，第二次用到10%左右再去充满电，循环5-10个周期
* 欣旺达: 前5次20%左右开始充，充满多冲半小时到一小时，以后随意
* ART: 新电池用到20%充电，然后充满
* ZASZ: 勿将电池用到自动关机，前5次充电电量低于15%时开始充电，充满后再充1小时。5次循环后电池待机时间达到正常状态
* 品胜: 新电池都带一些虚电，用到10%开始充电，不要用到关机，一次性充到100%，再多充1小时拔掉充电器，循环充电使用3-5次后会完全激发电池里面的电量，平时用最好充满，不要边充边玩
* 长和胜: 新电池大部分是虚电，循环6-10次才会耐用。电量10%以上就要充电，不要低于10%或自动关机才充电，这样可以防止虚电电量过低导致的无法开机
* 飞毛腿: 建议把原始电量用到10%以下之后再充满100%，然后用到10%以下后又充满100%，如此循环5~10次（大约一周），这样电池才被彻底激活哦(=^_^=)另外，新电池的原始电量不是真实电量的，新电芯还有一大片区域没开始存电呢，原始电量50%只是一小部分区域的50%，不是整个电芯的50%哦，所以新电池的原始电量用得快是正常的
* 中正: 前3-5次充电称为调整期，应充8小时以上，保证充分激活锂离子的活性。锂离子电池没有记忆效应，但有很强的惰性，应给予充分激活；充电前建议慢充充电，减少快充方式，无论慢充还是快充都不要超过12小时，否则电池很可能会因为长时间的供电产生巨大的电子流而烧坏电芯；有很多用户在充电时还把手机开着，在充电过程中，电池一面因为手机的使用而向外放电，又因电池的充电而向内供电，很可能使电压紊乱导致手机电路板发热，如果有来电时会产生回流电流，对手机内部的零件造成损坏；电池的寿命取决于反复充放电次数，锂电池大约可以充放电500次左右，之后电池的性能会大大减弱，应尽量避免把电池内余电全部放完再充电，否则随着充电次数的增加电池性能会慢慢减弱
* 曲赛德(超容): 新电池里面是虚电，因为静置的时间久锂电子不活跃，首次使用电池用到10%左右就要充电，充电时间满6小时，连续循环一周，就可以充分激活锂电子的活性，不建议边充边玩，不建议用到没电。

## 充电宝兼容性

&emsp;&emsp;CL可以和充电宝配合使用，停充模式下充电宝优先为手机供电，充电宝电量耗尽后再由手机电池供电，对长途旅行的用户更为有意义，充电宝的容量性价比也远高于手机电池。注意：
* 无线充电时，如果充电功率不够有可能消耗电池电量，不推荐CL搭配无线充电使用
* 大部分有线充电宝支持"休眠模式"，在电流低于某个阈值一段时间后，会自动关闭自身电源。这种模式下使用CL，充电宝可能在手机锁屏后由于电流过小导致充电宝自动关闭电源, 造成无CL无法正常工作
* 大部分有线充电宝支持"小电流模式"，双击或长按电源键后进入小电流模式，这种模式在低电流时不会自动关闭电源，这种模式下CL在手机锁屏后也可以正常工作。注意有的充电宝几小时后会自动退出小电流模式

## 使用前必看

* iPhone8+存在120秒设定充电状态延迟. iPad可能也存在.
* 停充模式不会更新系统状态栏的充电标志,实际充电状态可以在看爱思助手或者CL查看.禁流模式会改变系统状态栏的充电标志(iPhone8+), 禁流模式在"高级-停充时启用禁流"中设定。
* 对于巨魔环境,因任何原因导致的服务被杀(比如重启系统/重启用户空间/半越狱不稳定/iCloud夜间同步/其他巨魔App...),将导致CL失效. 
* CL的设计思路就是减少充电次数,因此不会连着usb就自发充电,也不会无故自动恢复充电,充电/停充都有触发条件,请仔细查看本页说明.
* 系统自带电池优化会导致CL失效,建议关闭.如果不使用CL需在系统设置中手动重置电池优化开关(先关后开).
* 新电池请先激活再使用CL, 否则有几率出现硬件停充失效问题。停充过久会出现小板统计有误和硬件停充失效问题, 建议一个月至少满充满放一次.

## 使用说明

### 名词解释

* 停充: 禁止电流流入电池, 此时电池不充电也不放电, 电源直接为设备硬件供电. 用户应优先使用此模式
* 禁流: 禁止电流流入设备, 此时电池处于放电状态, 电池为设备硬件供电. 电池若不支持停充, 则应使用此模式
* 限流: 通过模拟高温的方式限制充电电流. 电池在充电时如果电流过大导致异常发热, 则应选择此模式

### 启用

&emsp;&emsp;设置全局启用,关闭后CL将恢复充电状态,并处于观察者模式,只读取电池信息,不进行任何操作.

### 悬浮窗

* 用于实时查看状态,同时查看服务是否正常运行
* 可拖动到任意位置
* 点击可切换CL全局启用状态
* 若设置为自动隐藏,前台有其他App时自动隐藏

### 模式

&emsp;&emsp;插电即充模式适合随用随充的普通用户使用:
* 重新接入电源且满足充电条件时开始充电
* 电量低于设定值时开始充电(为禁流设计)
* 电量高于设定值时停止充电
* 温度低于设定值时开始充电
* 温度高于设定值时停止充电

&emsp;&emsp;边缘触发模式适合手机常年连电源的工作室使用:
* 电量低于设定值时开始充电
* 电量高于设定值时停止充电
* 温度高于设定值时停止充电

&emsp;&emsp;触发优先级从高到低: 
* 充电(电量极低)
* 停充(电量>温度)
* 充电(电量>温度>插电)

### 更新频率

* 更新频率用于设定CL界面App和悬浮窗的数据更新频率.
* CL的服务并不耗电,界面App和悬浮窗会消耗少量的电,绝大多数用户并无感知.如果实测耗电,可以调低频率.

### 阈值设定

* CL阈值默认设定为20/80/10/35, 你需要根据实际情况设置否则可能无法正常工作.
* 温度阈值的设定,可根据"历史统计-小时数据"的温度数据设置合适的阈值.   
* 设定阈值和实际触发值不一定完全相同,例如设定80%上限结果到81%停充,大部分手机差距在0-1%,极少数3-5%,差异值与120秒延迟有关,与充电速度有关,也与电池质量有关.停充后如果存在微弱电流可能造成差值;另外健康度的突然变化也会影响电量;新电池未激活直接使用CL也会导致停充后有较大电流.
* 电量上限阈值的设定,如果是短期停充,此上限可以根据自己需要设置;如果是iPad长年连电停充,则此上限可以设置为最佳停充电量,最佳停充电确定方法如下:将电量充满,关闭所有耗电App和功能然后静置,让电量自然降低,等待一天后此电量就是最佳停充电量.

### 行为

&emsp;&emsp;用于控制触发充电和停充时的行为,目前仅支持系统通知,每次重装CL需要重选以生效.

### 高级

* SmartBattery和智能停充,绝大多数用户使用默认配置即可,非正版电池如果使用默认配置导致健康度异常下降,可以自定义以最大程度减缓健康度下降速度.
* 自动禁流,用于兼容不支持停充的电池.开启禁流后等同于消耗电池电量,此时电池损耗和正常使用一致.
* 高温模拟,Powercuff,温度越高,硬件(充电器/CPU/GPU/背光/WiFi/无线/扬声器等)耗电越少,手机越卡顿,充电电流电压也越低.注意系统本身会根据实际情况调节该项,如果要强制指定模式(不建议)请打开锁定开关.越狱环境下如果存在功能冲突的tweak则CL不生效.
* 峰值性能,用于控制低温和电量不足时的峰值性能,不建议修改.
* 自动限流,用于自身流控不好的电池,电流过大会导致电池温度过高,健康度下降.选择合适的高温模拟等级: 可在电量小于30%时充电,电量越低时充电电流越高,手动设置"高级-高温模拟-设置"(等级从"正常"到"重度",等级越高电流越小),每次设置后几秒内可以观察到电流变化,达到合适的电流值时,将该等级设置到"高级-自动限流-高温模拟"中.自动限流在充电时自动设置为指定高温模拟等级(高级-自动限流-高温模拟),停充时自动恢复到默认等级(高级-高温模拟-设置).

注意: 
* 有些电池可能无法使用高温模拟,以实测为准.
* 由于系统机制,高温模拟无法在锁屏状态下生效

### 电池信息

* 健康度,与爱思助手保持一致,CL健康度是根据最大实际容量计算的.通常新电池健康度都会超过100%,而系统设置显示的健康度不会超过100%,,所以健康度100%到99%的过程较长.注意健康度在长期停充的状态下可能有突然大幅度下降和统计不准确的情况,此时禁用CL并正常充电几次即可恢复.
* 硬件电量,一般情况下和系统电量接近,如果差值过大则可能是未校准或质量问题导致.硬件电量比系统电量更准确,硬件电量可能会大于100%也可能为负值,硬件电量大于100%时为过充此时系统电量为100%,为负时为电池亏电,此时系统电量为0%.
* 电流以"瞬时电流"为准,电池电流为正说明从充电器流入电池,电池电流为负说明电池为设备供电.使用CL且停充状态下电池电流一般为0,此时电流流经电池为设备供电,电池起到闭合电路作用(可以理解为导线),此时对电池的损耗应小于仅使用电池为设备供电.禁流状态下电池电流一般为负.

### 历史统计

&emsp;&emsp;统计图用于查看一段时间内的电池状态,左右滑动可时移,点击上方标签可显示或隐藏特定指标

* 五分钟数据图,详细展示每次充放电时的电量/温度/电流及充电状态
* 小时数据图,概览充放电时的电量/温度/电流变化及充电状态
* 天数据图,详细展示每天健康度变化
* 月数据图,概览每月健康度变化

### 快捷指令
(适用于某些巨魔用户存在服务被杀导致软件失效的情况):  
+新建快捷指令 - 添加操作 - 类别 - "网页" - "Safari浏览器" - "打开URL"(以下是URL内容,标题自己设置)
* cl:///                        打开CL
* cl:///exit                    打开CL,退出CL(仅拉起服务)
* cl:///charge/exit      打开CL,启用充电,退出CL
* cl:///nocharge/exit    打开CL,停用充电,退出CL  

注意: 
* iPhone8+存在至多120秒延迟
* 可以在个人自动化中的电量事件使用上述指令实现指定电量开始/停止充电,也可以和其他模式结合实现开机自启(比如打开某App时触发)
* 快捷指令拉起服务需要在非锁屏状态下生效

集成快捷指令(iOS16+): <https://www.icloud.com/shortcuts/2ec3aed94f414378918f3e082b7bf6b0>

