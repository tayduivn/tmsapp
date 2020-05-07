package com.tgdd.mwgpay;

import android.app.Application;
import android.content.Context;

import androidx.multidex.MultiDex;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.swmansion.rnscreens.RNScreensPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.imagepicker.ImagePickerPackage;
import fr.snapp.imagebase64.RNImgToBase64Package;
//import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.reactnativecommunity.rnpermissions.RNPermissionsPackage;

import com.gantix.JailMonkey.JailMonkeyPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.masteratul.exceptionhandler.ReactNativeExceptionHandlerPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

import com.henninghall.date_picker.DatePickerPackage;
import com.oblador.keychain.KeychainPackage;
import com.rnfingerprint.FingerprintAuthPackage;
import org.reactnative.camera.RNCameraPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new GeolocationPackage(),
            new NetInfoPackage(),
            new RNDeviceInfo(),
            new RNScreensPackage(),
            new ImageResizerPackage(),
            new ImagePickerPackage(),
            new RNImgToBase64Package(),
            //new NetInfoPackage(),
            new RNExitAppPackage(), new JailMonkeyPackage(), new LottiePackage(),
          new RNPermissionsPackage(), new ReactNativeRestartPackage(), new ReactNativeExceptionHandlerPackage(),
          new RNFirebasePackage(), new RNFirebaseMessagingPackage(), // <-- Add this line
          new RNFirebaseNotificationsPackage(), new DatePickerPackage(), new KeychainPackage(),
          new FingerprintAuthPackage(), new RNCameraPackage(), new ReactNativeContacts(), new AsyncStoragePackage(),
          new LinearGradientPackage(), new VectorIconsPackage(), new RNGestureHandlerPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  protected void attachBaseContext(Context base) {
    super.attachBaseContext(base);
    MultiDex.install(this);
  }
}
