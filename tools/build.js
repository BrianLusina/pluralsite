import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/*eslint-disable no-console*/

process.env.NODE_ENV = "production";

console.log("Generating minified bundle for production with Webpack...".blue);

webpack(webpackConfig).run((err, stats)=>{
    if (err) {
        console.log(err.bold.err);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log("Webpack generated the following warnings".bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yello));
    }

    console.log(`Webpack stats: `);

    // the app is ready

    console.log("Your app has been compiled in production mode and written to /dist. It is ready to be served!".green);
    return 0;
});
