import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OsTimerPlugin)
public class OsTimerPlugin: CAPPlugin {
    private let implementation = OsTimer()
/*
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
*/
    @objc func start(_ call: CAPPluginCall){
        let delay=Int(call.getString("delay")?? getConfigValue("delay") as? string)?? 1500
        let period=Int(call.getString("delay")?? getConfigValue("delay") as? string) ?? 1500
        call.resolve()
    }

    @objc func stop(_ call: CAPPluginCall){
        call.resolve()
    }
}
