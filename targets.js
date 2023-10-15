// Page #1 - data of target servers
data1 = {
    Project: [{
        name: "Drive",
        url: "https://drive.xie.ke",
    }, {
        name: "Blog",
        url: "https://blog.xie.ke",
    }],
    Linode: [{
        name: "Newark",
        url: "http://speedtest.newark.linode.com/",
        download: "http://speedtest.newark.linode.com/100MB-newark.bin"
    }],
    DigitalOcean: [{
        name: "NYC1",
        url: "http://speedtest-nyc1.digitalocean.com/",
        download: "http://speedtest-nyc1.digitalocean.com/100mb.test"
    }, {
        name: "NYC2",
        url: "http://speedtest-nyc2.digitalocean.com/",
        download: "http://speedtest-nyc2.digitalocean.com/100mb.test"
    }, {
        name: "NYC3",
        url: "http://speedtest-nyc3.digitalocean.com/",
        download: "http://speedtest-nyc3.digitalocean.com/100mb.test"
    }, {
        name: "AMS2",
        url: "http://speedtest-ams2.digitalocean.com/",
        download: "http://speedtest-ams2.digitalocean.com/100mb.test"
    }, {
        name: "AMS3",
        url: "http://speedtest-ams3.digitalocean.com/",
        download: "http://speedtest-ams3.digitalocean.com/100mb.test"
    }, {
        name: "SFO1",
        url: "http://speedtest-sfo1.digitalocean.com/",
        download: "http://speedtest-sfo1.digitalocean.com/100mb.test"
    }, {
        name: "SFO2",
        url: "http://speedtest-sfo2.digitalocean.com/",
        download: "http://speedtest-sfo2.digitalocean.com/100mb.test"
    }, {
        name: "SGP1",
        url: "http://speedtest-sgp1.digitalocean.com/",
        download: "http://speedtest-sgp1.digitalocean.com/100mb.test"
    }, {
        name: "LON1",
        url: "http://speedtest-lon1.digitalocean.com/",
        download: "http://speedtest-lon1.digitalocean.com/100mb.test"
    }, {
        name: "FRA1",
        url: "http://speedtest-fra1.digitalocean.com/",
        download: "http://speedtest-fra1.digitalocean.com/100mb.test"
    }, {
        name: "TOR1",
        url: "http://speedtest-tor1.digitalocean.com/",
        download: "http://speedtest-tor1.digitalocean.com/100mb.test"
    }, {
        name: "BLR1",
        url: "http://speedtest-blr1.digitalocean.com/",
        download: "http://speedtest-blr1.digitalocean.com/100mb.test"
    }],
    VirMach: [{
        name: "Frankfurt",
        url: "http://ffm.lg.virmach.com/",
        download: "http://ffm.lg.virmach.com/100MB.test"
    }],
    //
    // Official test URLs of BandwagonHost
    // (BandwagonHost does not publicly provide test URLs)
    // (These are obtained by directly asking BandwagonHost)
    BandwagonHost: [{
        name: "Los Angeles DC9 CN2 GIA KVM",
        url: "http://65.49.131.102/"
    }, {
        name: "Los Angeles DC3 CN2 KVM",
        url: "http://23.252.103.101/"
    }]
};
// Page #2 - data of target servers
data2 = {
    //
    // Source: https://winnervps.com/looking-glass.php/
    WINNERvps: [{
        name: "Los Angeles",
        url: "https://backup.serverkeren.com/",
        download: "https://backup.serverkeren.com/100MB.test"
    }, {
        name: "New York",
        url: "https://lgeusa.serverkeren.com/",
        download: "https://lgeusa.serverkeren.com/100MB.test"
    }, {
        name: "London",
        url: "https://lguk.serverkeren.com/",
        download: "https://lguk.serverkeren.com/100MB.test"
    }, {
        name: "Jakarta",
        url: "https://lgid.serverkeren.com/",
        download: "https://lgid.serverkeren.com/100MB.test"
    }],
    //
    // Source: https://www.budgetvm.com/chicago-datacenter.php
    BudgetVM: [{
        name: "Chicago",
        url: "http://199.231.208.6/",
        download: "http://199.231.208.6/1GB.test"
    }, {
        name: "Dallas",
        url: "http://192.80.186.135/",
        download: "http://192.80.186.135/1GB.test"
    }, {
        name: "Los Angeles",
        url: "http://192.157.214.6/",
        download: "http://192.157.214.6/1GB.test"
    }, {
        name: "Miami",
        url: "http://172.246.125.6/",
        download: "http://172.246.125.6/1GB.test"
    }],
};
// Page #3 - AWS
data3 = {
    //
    // Source: ky0nch3ng
    "EC2": [{
        name: "Asia Pacific (Seoul)",
        url: "http://ap-northeast-2-ec2.cloudharmony.net/"
    }, {
        name: "US West (N. California)",
        url: "http://us-west-1-ec2.cloudharmony.net/"
    }, {
        name: "US West (Oregon)",
        url: "http://us-west-2-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Sydney)",
        url: "http://ap-southeast-2-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Tokyo)",
        url: "http://ap-northeast-1-ec2.cloudharmony.net/"
    }, {
        name: "EU (Frankfurt)",
        url: "http://eu-central-1-ec2.cloudharmony.net/"
    }, {
        name: "Canada (Central)",
        url: "http://ca-central-1-ec2.cloudharmony.net/"
    },/*INVALID {
        name: "US East (Ohio)",
        url: "http://us-east-2-ec2.cloudharmony.net/"
    },*/ {
        name: "EU (Ireland)",
        url: "http://eu-west-1-ec2.cloudharmony.net/"
    }, {
        name: "EU (London)",
        url: "http://eu-west-2-ec2.cloudharmony.net/"
    }, {
        name: "South America (São Paulo)",
        url: "http://sa-east-1-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Singapore)",
        url: "http://ap-southeast-1-ec2.cloudharmony.net/"
    }, {
        name: "US East (N. Virginia)",
        url: "http://us-east-1-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Mumbai)",
        url: "http://ap-south-1-ec2.cloudharmony.net/"
    }],
    //
    // Source: http://ec2-reachability.amazonaws.com/
    "EC2 (No Download)": [{
        name: "North Virginia",
        url: "http://18.204.0.0/"
    }, {
        name: "Ohio",
        url: "http://3.16.0.0/"
    }],
    //
    // Source: https://docs.aws.amazon.com/general/latest/gr/rande.html
    "S3 (No Download)": [/*{
        name: "US East (Ohio)",
        url: "http://s3.us-east-2.amazonaws.com/"
    },*/ {
        name: "US East (N. Virginia)",
        url: "http://s3.amazonaws.com/"
    }, {
        name: "US West (N. California)",
        url: "http://s3.us-west-1.amazonaws.com/"
    }, {
        name: "US West (Oregon)",
        url: "http://s3.us-west-2.amazonaws.com/"
    },/* {
        name: "Asia Pacific (Mumbai)",
        url: "http://s3.ap-south-1.amazonaws.com/"
    },*/ {
        name: "Asia Pacific (Osaka-Local)",
        url: "http://s3.ap-northeast-3.amazonaws.com/"
    },/* {
        name: "Asia Pacific (Seoul)",
        url: "http://s3.ap-northeast-2.amazonaws.com/"
    },*/ {
        name: "Asia Pacific (Singapore)",
        url: "http://s3.ap-southeast-1.amazonaws.com/"
    },/* {
        name: "Asia Pacific (Sydney)",
        url: "http://s3.ap-southeast-2.amazonaws.com/"
    },*/ {
        name: "Asia Pacific (Tokyo)",
        url: "http://s3.ap-northeast-1.amazonaws.com/"
    },/* {
        name: "Canada (Central)",
        url: "http://s3.ca-central-1.amazonaws.com/"
    },*//* {
        name: "EU (Frankfurt)",
        url: "http://s3.eu-central-1.amazonaws.com/"
    },*/ {
        name: "EU (Ireland)",
        url: "http://s3.eu-west-1.amazonaws.com/"
    },/* {
        name: "EU (London)",
        url: "http://s3.eu-west-2.amazonaws.com/"
    },*/ {
        name: "EU (Paris)",
        url: "http://s3.eu-west-3.amazonaws.com/"
    }, {
        name: "South America (São Paulo)",
        url: "http://s3.sa-east-1.amazonaws.com/"
    }]
};
// Page #4 - Azure and GCE
data4 = {
    //
    // Source: ky0nch3ng
    "Azure Americas": [{
        name: "Quebec City",
        url: "http://canada-east-azure.cloudharmony.net/"
    }, {
        name: "Toronto",
        url: "http://canada-central-azure.cloudharmony.net/"
    }, {
        name: "California",
        url: "http://us-west-azure.cloudharmony.net/"
    },/*INVALID {
        name: "West US 2",
        url: "http://us-west2-azure.cloudharmony.net/"
    },*/ {
        name: "Iowa",
        url: "http://us-central-azure.cloudharmony.net/"
    }, {
        name: "West Central US",
        url: "http://us-westcentral-azure.cloudharmony.net/"
    }, {
        name: "Texas    ",
        url: "http://us-southcentral-azure.cloudharmony.net/"
    }, {
        name: "Illinois",
        url: "http://us-northcentral-azure.cloudharmony.net/"
    }, {
        name: "Virginia 2",
        url: "http://us-east2-azure.cloudharmony.net/"
    }, {
        name: "Virginia",
        url: "http://us-east-azure.cloudharmony.net/"
    }, {
        name: "Sao Paulo State",
        url: "http://brazil-south-azure.cloudharmony.net/"
    }],
    //
    // Source: ky0nch3ng
    "Azure Others":[{
        name: "Netherlands",
        url: "http://eu-west-azure.cloudharmony.net/"
    }, {
        name: "Ireland",
        url: "http://eu-north-azure.cloudharmony.net/"
    },/* {
        name: "Cardiff",
        url: "http://uk-west-azure.cloudharmony.net/"
    },*/ {
        name: "London",
        url: "http://uk-south-azure.cloudharmony.net/"
    },/*INVALID {
        name: "Osaka",
        url: "http://japan-west.cloudharmony.net/"
    },*/ {
        name: "Tokyo, Saitama",
        url: "http://japan-east-azure.cloudharmony.net/"
    }, {
        name: "Hong Kong",
        url: "http://asia-east-azure.cloudharmony.net/"
    }, {
        name: "Seoul",
        url: "http://korea-central-azure.cloudharmony.net/"
    }, {
        name: "Busan",
        url: "http://korea-south-azure.cloudharmony.net/"
    }, {
        name: "Singapore",
        url: "http://asia-southeast-azure.cloudharmony.net/"
    }, {
        name: "Pune",
        url: "http://india-central-azure.cloudharmony.net/"
    }, {
        name: "Mumbai",
        url: "http://india-west-azure.cloudharmony.net/"
    }, {
        name: "Chennai",
        url: "http://india-south-azure.cloudharmony.net/"
    }, {
        name: "New South Wales",
        url: "http://australia-east-azure.cloudharmony.net/"
    }, {
        name: "Victoria",
        url: "http://australia-southeast-azure.cloudharmony.net/"
    }],
    //
    // Source: ky0nch3ng
    "GCE": [{
        name: "Tokyo, Japan",
        url: "http://asia-northeast1-gce.cloudharmony.net/"
    }, {
        name: "Changhua County, Taiwan",
        url: "http://asia-east1-gce.cloudharmony.net/"
    }, {
        name: "Jurong West, Singapore",
        url: "http://asia-southeast1-gce.cloudharmony.net/"
    }, {
        name: "Sydney, Australia",
        url: "http://australia-southeast1-gce.cloudharmony.net/"
    }, {
        name: "Frankfurt, Germany",
        url: "http://europe-west3-gce.cloudharmony.net/"
    }, {
        name: "London, U.K.",
        url: "http://europe-west2-gce.cloudharmony.net/"
    }, {
        name: "St. Ghislain, Belgium",
        url: "http://europe-west1-gce.cloudharmony.net/"
    }, {
        name: "The Dalles, Oregon, USA",
        url: "http://us-west1-gce.cloudharmony.net/"
    }, {
        name: "South Carolina, USA",
        url: "http://us-east1-gce.cloudharmony.net/"
    }, {
        name: "Ashburn, Virginia, USA",
        url: "http://us-east4-gce.cloudharmony.net/"
    }, {
        name: "Council Bluffs, Iowa, USA",
        url: "http://us-central1-gce.cloudharmony.net/"
    }, {
        name: "São Paulo, Brazil",
        url: "http://southamerica-east1-gce.cloudharmony.net/"
    }]
};
//
//
if(location.hash=="#page2") {
    data = data2;
}
else if(location.hash=="#page3") {
    data = data3;
}
else if(location.hash=="#page4") {
    data = data4;
}
else {
    data = data1;
}
//
//
dataKeys = Object.keys(data);
for(i=0;i<=dataKeys.length-1;i++) {
    dataEntry = data[dataKeys[i]];
    for(j=0;j<=dataEntry.length-1;j++) {
        if(dataEntry[j].url.indexOf("cloudharmony.net")!=-1) {
            data[dataKeys[i]][j].download = "imgmb.html#(2)"+data[dataKeys[i]][j].url+"probe/test2mb.jpg";
        }
    }
}