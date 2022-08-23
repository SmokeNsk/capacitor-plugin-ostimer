import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OsTimerPlugin)
public class OsTimerPlugin: CAPPlugin {
    private var osTimer = OsTimer(timeInterval: 2)
    private var tmrCounter=0
    private static let EVENT_NAME="OsTimerTick"
    
    @objc public func start(_ call: CAPPluginCall){
        /*let delay=call.getString("delay") ?? (
        getConfigValue("delay") as? String ?? "1500")*/
        let period=call.getInt("period") ?? Int(getConfigValue("period") as? String ?? "2000")
         
        osTimer.timeInterval=TimeInterval(period!/1000)
        
        osTimer.eventHandler={
    
            self.tmrCounter=self.tmrCounter+1
            self.notifyListeners(OsTimerPlugin.EVENT_NAME,  data: ["tick":self.tmrCounter])
        }
 
        osTimer.resume()
        call.resolve()
    }

    @objc public func stop(_ call: CAPPluginCall){
        call.resolve()
    }
}

