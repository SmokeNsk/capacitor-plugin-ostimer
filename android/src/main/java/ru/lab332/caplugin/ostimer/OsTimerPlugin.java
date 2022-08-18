package ru.lab332.caplugin.ostimer;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "OsTimer")
public class OsTimerPlugin extends Plugin {

    private OsTimer osTimer = new OsTimer();


    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void tick(PluginCall call) {
        int delay = getConfig().getInt("delay", 1500);
        int period = getConfig().getInt("period", 1500);
        osTimer.start(call, delay, period);

    }
//
//    @PluginMethod
//    public void echo(PluginCall call) {
//        String value = call.getString("value");
//
//        JSObject ret = new JSObject();
//        ret.put("value", implementation.echo(value));
//        call.resolve(ret);
//    }
}
