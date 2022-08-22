import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OsTimerPlugin)
public class OsTimerPlugin: CAPPlugin {
    private let osTimer : OsTimer

    @objc func start(_ call: CAPPluginCall){
        let delay=Int(call.getString("delay")??, getConfigValue("delay") as? string) ?? 1500
        let period=Int(call.getString("delay")??, getConfigValue("delay") as? string) ?? 1500
        if (osTimer==nil){
            osTimer=OsTimer(timeInterval: 3)
        }
        osTimer.eventHandler={
            self.notifyListeners("OsTimerTick",[:])
        }
        osTimer.resume()
        call.resolve()
    }

    @objc func stop(_ call: CAPPluginCall){
        call.resolve()
    }
}
