
const MRPL_DEVICE_DATA = {
    totalCameras: 230, 
    onlineCameras: 219, 
    offlineCameras: 11, 
    
    totalANPR: 20,
    onlineANPR: 19,
    
    totalFaceRecognition: 25,
    onlineFaceRecognition: 24,
    
    storageCapacityTB: 100,
    storageUsedTB: 67,
    
    gates: {
        'Main Gate': { cameras: '80/80', anpr: 4, bollards: 8, status: 'ONLINE' },
        'LP Gate': { cameras: '28/28', anpr: 2, bollards: 8, status: 'ONLINE' },
        'Jokatte Gate': { cameras: '52/52', anpr: 4, bollards: 8, status: 'ONLINE' },
        'E2 Gate': { cameras: '18/18', anpr: 2, bollards: 0, status: 'ONLINE' },
        'Cargo Gate': { cameras: '32/32', anpr: 4, bollards: 8, status: 'ONLINE' },
        'Railway Sliding': { cameras: '10/10', anpr: 2, bollards: 0, status: 'ONLINE' },
        'PCR': { cameras: '6/6', anpr: 0, bollards: 0, status: 'ONLINE' },
        'CISF Checking': { cameras: '4/4', anpr: 2, bollards: 0, status: 'ONLINE' }
    },
    
    // All camera types from BOQ
    cameraTypes: [
        { type: 'Indoor Dome Cameras- 5 MP', total: 114 },
        { type: 'Outdoor Fixed Cameras- 5 MP', total: 107 },
        { type: 'PTZ with IR - 2MP', total: 11 },
        { type: 'Panoramic Cameras- 180 - 20 MP', total: 9 },
        { type: 'Panoramic Cameras- 360° - 20 MP', total: 22 },
        { type: 'ANPR Cameras', total: 20 },
        { type: 'Face recognition Cameras', total: 25 }
    ]
};

// Parking Vehicles Data - Global
const parkingVehiclesData = [
    // Main Gate P1 - Cars
    { vehicle: 'KA-19-AB-1234', location: 'Main Gate P1', type: 'Car', entryTime: '08:45 AM', duration: '2h 15m' },
    { vehicle: 'KA-20-CD-5678', location: 'Main Gate P1', type: 'Car', entryTime: '09:15 AM', duration: '1h 45m' },
    { vehicle: 'KA-19-EF-9012', location: 'Main Gate P1', type: 'Car', entryTime: '07:30 AM', duration: '3h 30m' },
    { vehicle: 'KA-20-GH-3456', location: 'Main Gate P1', type: 'Car', entryTime: '10:15 AM', duration: '0h 45m' },
    { vehicle: 'KA-19-IJ-7890', location: 'Main Gate P1', type: 'Car', entryTime: '05:40 AM', duration: '5h 20m' },
    { vehicle: 'KA-20-KL-2345', location: 'Main Gate P1', type: 'Car', entryTime: '09:50 AM', duration: '1h 10m' },
    
    // Main Gate P2 - Cars
    { vehicle: 'KA-19-MN-6789', location: 'Main Gate P2', type: 'Car', entryTime: '08:10 AM', duration: '2h 50m' },
    { vehicle: 'KA-20-OP-1234', location: 'Main Gate P2', type: 'Car', entryTime: '09:40 AM', duration: '1h 20m' },
    { vehicle: 'KA-19-QR-5678', location: 'Main Gate P2', type: 'Car', entryTime: '06:45 AM', duration: '4h 15m' },
    { vehicle: 'KA-20-ST-9012', location: 'Main Gate P2', type: 'Car', entryTime: '10:30 AM', duration: '0h 30m' },
    { vehicle: 'KA-19-UV-3456', location: 'Main Gate P2', type: 'Car', entryTime: '04:15 AM', duration: '6h 45m' },
    { vehicle: 'KA-20-WX-7890', location: 'Main Gate P2', type: 'Car', entryTime: '08:55 AM', duration: '2h 05m' },
    { vehicle: 'TN-09-AB-1234', location: 'Main Gate P2', type: 'Car', entryTime: '02:30 AM', duration: '8h 30m' },
    
    // Main Gate P3 - Cars
    { vehicle: 'KA-19-CD-2345', location: 'Main Gate P3', type: 'Car', entryTime: '09:05 AM', duration: '1h 55m' },
    { vehicle: 'KA-20-EF-6789', location: 'Main Gate P3', type: 'Car', entryTime: '07:50 AM', duration: '3h 10m' },
    { vehicle: 'KA-19-GH-1234', location: 'Main Gate P3', type: 'Car', entryTime: '10:10 AM', duration: '0h 50m' },
    { vehicle: 'KA-20-IJ-5678', location: 'Main Gate P3', type: 'Car', entryTime: '08:20 AM', duration: '2h 40m' },
    { vehicle: 'KA-19-KL-9012', location: 'Main Gate P3', type: 'Car', entryTime: '03:45 AM', duration: '7h 15m' },
    
    // E2 Gate - Trucks
    { vehicle: 'KA-20-MN-5847', location: 'E2 Gate', type: 'Truck', entryTime: '09:30 AM', duration: '1h 30m' },
    { vehicle: 'KA-19-OP-8765', location: 'E2 Gate', type: 'Truck', entryTime: '08:45 AM', duration: '2h 15m' },
    { vehicle: 'KA-20-QR-4321', location: 'E2 Gate', type: 'Truck', entryTime: '10:15 AM', duration: '0h 45m' },
    { vehicle: 'KA-19-ST-6543', location: 'E2 Gate', type: 'Truck', entryTime: '07:10 AM', duration: '3h 50m' },
    { vehicle: 'KA-20-UV-9876', location: 'E2 Gate', type: 'Truck', entryTime: '05:40 AM', duration: '5h 20m' },
    { vehicle: 'KA-19-WX-2468', location: 'E2 Gate', type: 'Truck', entryTime: '09:50 AM', duration: '1h 10m' }
];

// Calculate percentages
function calculatePercentages() {
    const anprPercent = Math.round((MRPL_DEVICE_DATA.onlineANPR / MRPL_DEVICE_DATA.totalANPR) * 100);
    const frPercent = Math.round((MRPL_DEVICE_DATA.onlineFaceRecognition / MRPL_DEVICE_DATA.totalFaceRecognition) * 100);
    const storagePercent = Math.round((MRPL_DEVICE_DATA.storageUsedTB / MRPL_DEVICE_DATA.storageCapacityTB) * 100);
    
    return {
        anpr: anprPercent + '%',
        fr: frPercent + '%',
        storage: storagePercent + '%'
    };
}

document.addEventListener('DOMContentLoaded', () => {
    updateKPIFormats();
});

function initializeMRPLData() {
    console.log('✅ Loading MRPL Device Data');
    
    updateKPIFormats();
    
    populateGateHealthTable();
    
    populateGateOperationsTable(); // NEW: Populate gate operations table
    
    loadFallbackInventory();
    loadFallbackAnalytics(); 
}

function loadFallbackInventory() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
 
    const boqDevices = [
        { type: 'Gate', total: 8 },
        { type: 'Automatic Tyre Killers', total: 3},
        { type: 'Manual Tyre Killers', total: 3 },
        { type: 'Under Vehicle Surveillance Systems (UVSS)', total: 6 },
        { type: 'Bollards', total: 24 },
        { type: 'Boom Barriers', total: 30 },
        { type: 'Swing Barriers', total: 24 },
        { type: 'Visitor Kiosks', total: 6 },
        { type: '32" Overhead Displays', total: 19 },
        { type: 'Indoor Digital Displays', total: 8 },
        { type: 'Outdoor Digital Displays', total: 9 },
        { type: 'Video Wall (6 x 3)', total: 1 },
        { type: 'Video Wall (2 x 3)', total: 1 },
        { type: 'Door Frame Metal Detectors (DFMD)', total: 15 },
        { type: 'Baggage Scanners', total: 8 },
        { type: 'Frisking Booths', total: 5 },
        { type: 'Long Range RFID Readers', total: 30 },
        { type: 'Push Button for Boom Barriers', total: 30 },
        { type: 'Electro Magnetic Locks', total: 7 },
        { type: 'Indoor Dome Cameras- 5 MP', total: 114 },
        { type: 'Outdoor Fixed Cameras- 5 MP', total: 107 },
        { type: 'PTZ with IR - 2MP', total: 6 },
        { type: 'Panoramic Cameras- 180° - 20 MP', total: 9 },
        { type: 'Panoramic Cameras- 360° - 20 MP', total: 22 },
        { type: 'ANPR Cameras', total: 20 },
        { type: 'Face recognition Cameras', total: 25 },
        { type: 'IP Horn Speakers', total: 86 },
        { type: 'IP Ceiling Speakers', total: 80 },
        { type: 'Master & Local Control Desks', total: 7 },
        { type: 'Face recognition Readers', total: 48 },
        { type: 'Smart Card Readers', total: 7 },
        { type: 'QR Code Readers', total: 48 },
        { type: 'Camera Poles', total: 103 },
        { type: 'Racks (12U)', total: 19 },
        { type: 'Outdoor Junction Boxes', total: 47 },
        { type: 'Portable face readers (buses)', total: 20 },
        { type: 'Portable face readers (gates)', total: 4 },
        { type: '10 finger enrolment readers', total: 4 },
        { type: 'Indoor signages', total: 30 },
        { type: 'Wireless Access Points', total: 2 },
        { type: 'Video Conferencing Solutions', total: 2 },
        { type: 'Switches', total: 1 },
        { type: 'Speed Guns', total: 20 },
        { type: 'Diesel Generator Sets', total: 2 }
    ];
    
    let totalDevices = 0;
    
    boqDevices.forEach(device => {
        totalDevices += device.total;
        
        const row = document.createElement('tr');
        row.className = 'device-row';
        row.innerHTML = `
            <td style="font-weight: 600; color: #00d4ff;">${device.type}</td>
            <td style="font-weight: bold; font-size: 1.2rem; color: #00ff88;">${device.total}</td>
            <td style="font-size: 0.9rem; color: #8b9dc3;">Distributed across all gates</td>
        `;
        tbody.appendChild(row);
    });
    
    const summary = document.getElementById('inventorySummary');
    if (summary) {
        summary.innerHTML = `
            <strong>${boqDevices.length}</strong> device types | 
            <strong>${totalDevices}</strong> total devices | 
            <strong>8</strong> gates
        `;
    }
}

// NEW: Device Analytics Charts
function updateDeviceAnalytics() {
    if (!allDevicesData) return;
    
    // Categorize devices
    const categories = {
        'Cameras': 0,
        'Access Control': 0,
        'Displays': 0,
        'Readers': 0,
        'Security Equipment': 0,
        'Infrastructure': 0,
        'Others': 0
    };
    
    const topDevices = [];
    const gateDeviceCounts = {};
    
    allDevicesData.devices.forEach(device => {
        const deviceType = device.deviceType.toLowerCase();
        const total = Object.values(device.gates).reduce((sum, count) => sum + count, 0);
        
        topDevices.push({ name: device.deviceType, count: total });
        
        // Categorize
        if (deviceType.includes('camera') || deviceType.includes('dome') || 
            deviceType.includes('ptz') || deviceType.includes('panoramic') ||
            deviceType.includes('anpr') || deviceType.includes('face recognition camera')) {
            categories['Cameras'] += total;
        } else if (deviceType.includes('bollard') || deviceType.includes('barrier') || 
                   deviceType.includes('gate') || deviceType.includes('tyre killer') ||
                   deviceType.includes('Under Vehicle Surveillance System (UVSS)') || deviceType.includes('lock')) {
            categories['Access Control'] += total;
        } else if (deviceType.includes('display') || deviceType.includes('video wall') ||
                   deviceType.includes('kiosk') || deviceType.includes('signage')) {
            categories['Displays'] += total;
        } else if (deviceType.includes('reader') || deviceType.includes('rfid') ||
                   deviceType.includes('smart card') || deviceType.includes('qr code')) {
            categories['Readers'] += total;
        } else if (deviceType.includes('scanner') || deviceType.includes('Door Frame Metal Detector (DFMD)') ||
                   deviceType.includes('frisking') || deviceType.includes('baggage')) {
            categories['Security Equipment'] += total;
        } else if (deviceType.includes('pole') || deviceType.includes('rack') ||
                   deviceType.includes('junction') || deviceType.includes('wireless') ||
                   deviceType.includes('speaker') || deviceType.includes('Diesel Generator Set')) {
            categories['Infrastructure'] += total;
        } else {
            categories['Others'] += total;
        }
        
        // Gate distribution
        Object.entries(device.gates).forEach(([gate, count]) => {
            if (!gateDeviceCounts[gate]) gateDeviceCounts[gate] = 0;
            gateDeviceCounts[gate] += count;
        });
    });
    
    // Sort and get top 10 devices
    topDevices.sort((a, b) => b.count - a.count);
    const top10 = topDevices.slice(0, 10);
    
    // Create charts
    createDeviceCategoryChart(categories);
    createTopDevicesChart(top10);
    createGateDistributionChart(gateDeviceCounts);
}

function createDeviceCategoryChart(categories) {
    const ctx = document.getElementById('deviceCategoryChart');
    if (!ctx) return;
    
    // Destroy existing chart if any
    if (window.deviceCategoryChartInstance) {
        window.deviceCategoryChartInstance.destroy();
    }
    
    // Store category device mappings
    window.categoryDeviceMap = {
        'Surveillance Systems': [
            'Indoor Dome - 5 MP (114)',
            'Outdoor Fixed - 5 MP (107)',
            'PTZ with IR - 2MP (11)',
            'Panoramic - 180 - 20 MP (9)',
            'Panoramic - 360 - 20 MP (22)',
            'ANPR Cameras (20)',
            'Speed Guns (20)',
            'Face recognition Cameras (25)'
        ],
        'Access Control': [
            'Automatic Tyre Killer (3)',
            'Manual Tyre Killer (3)',
            'Under Vehicle Surveillance System (UVSS) (6)',
            'Bollards (24)',
            'Boom Barrier (30)',
            'Swing Barriers (24)',
            'EM Locks (7)'
        ],
        'Identification Systems': [
            'Face recognition Readers (48)',
            'Smart Card Reader (7)',
            'QR Code Readers (48)',
            'Long Range RFID Reader (30)',
            '10 finger enrolment readers (4)',
            'Portable face readers (buses) (20)',
            'Portable face readers (gates) (4)'
        ],
        'Security Screening': [
            'Door Frame Metal Detector (DFMD) (15)',
            'Baggage Scanner (8)',
            'Frisking Booth (5)'
        ],
        'Communication': [
            'IP Horn Speaker (86)',
            'IP Ceiling Speaker (80)'
        ],
        'Infrastructure': [
            'Camera Poles (103)',
            'Rack (12U) (19)',
            'Outdoor Junction Box (47)',
            'Visitor Kiosks (6)',
            '32" Overhead Display (19)',
            'Indoor Digital Displays (8)',
            'Outdoor Digital Displays (9)',
            'Video Wall (6 by 3) (1)',
            'Video Wall (2 by 3) (1)',
            'Push Button for Boom Barrier (30)',
            'Master & Local Control Desks (7)',
            'Indoor signages (30)',
            'Wireless Access Point (2)',
            'Video Conferencing Solution (2)',
            'Switches (1)',
            'Diesel Generator Set (2)'
        ]
    };
    
    window.deviceCategoryChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categories).filter(k => categories[k] > 0),
            datasets: [{
                data: Object.values(categories).filter(v => v > 0),
                backgroundColor: ['#00d4ff', '#00ff88', '#ffaa00', '#ff3366', '#8b9dc3', '#dc8570ff'],
                borderWidth: 2,
                borderColor: '#1a1f3a'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#e0e0e0', font: { size: 11 } }
                },
                title: {
                    display: true,
                    text: 'Device Categories',
                    color: '#00d4ff',
                    font: { size: 14, weight: 'bold' }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return label + ': ' + value + ' devices (Click to view list)';
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const labels = Object.keys(categories).filter(k => categories[k] > 0);
                    const categoryName = labels[index];
                    showCategoryDeviceList(categoryName);
                }
            }
        }
    });
}

// Show device list for clicked category
function showCategoryDeviceList(categoryName) {
    if (!window.categoryDeviceMap) return;
    
    const devices = window.categoryDeviceMap[categoryName] || [];
    const categoryCount = devices.length;
    
    const categoryColors = {
        'Surveillance Systems': '#00d4ff',
        'Access Control': '#00ff88',
        'Identification Systems': '#ffaa00',
        'Security Screening': '#ff3366',
        'Communication': '#8b9dc3',
        'Infrastructure': '#dc8570ff'
    };
    
    const categoryIcons = {
        'Surveillance Systems': '📹',
        'Access Control': '🚧',
        'Identification Systems': '🔍',
        'Security Screening': '🛡️',
        'Communication': '📢',
        'Infrastructure': '🏗️'
    };
    
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'categoryPopupOverlay';
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: flex; align-items: center; justify-content: center;';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = 'background: linear-gradient(135deg, #1e2749 0%, #2d3561 100%); border-radius: 12px; padding: 2rem; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; border: 2px solid #3d4a7a; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);';
    
    let html = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">';
    html += `<div style="display: flex; align-items: center; gap: 0.7rem;">`;
    html += `<span style="font-size: 2rem;">${categoryIcons[categoryName]}</span>`;
    html += `<div>`;
    html += `<div style="color: ${categoryColors[categoryName]}; font-size: 1.3rem; font-weight: 600;">${categoryName}</div>`;
    html += `<div style="color: #8b9dc3; font-size: 0.85rem; margin-top: 0.2rem;">${categoryCount} device types</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `<button onclick="closeCategoryPopup()" style="background: transparent; border: none; color: #8b9dc3; font-size: 2rem; cursor: pointer; line-height: 1; padding: 0; width: 40px; height: 40px; border-radius: 50%; transition: all 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#8b9dc3';">&times;</button>`;
    html += '</div>';
    
    if (devices.length === 0) {
        html += '<div style="text-align: center; padding: 3rem; color: #8b9dc3;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>';
        html += '<div>No devices in this category</div>';
        html += '</div>';
    } else {
        html += '<div style="background: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 0.5rem;">';
        devices.forEach((device, index) => {
            const bgColor = index % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            html += `<div style="padding: 0.8rem; border-bottom: ${index < devices.length - 1 ? '1px solid #3d4a7a' : 'none'}; background: ${bgColor}; color: #e0e0e0; font-size: 0.95rem; border-radius: 4px;">${device}</div>`;
        });
        html += '</div>';
    }
    
    popup.innerHTML = html;
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeCategoryPopup();
        }
    });
}

// Close category popup
function closeCategoryPopup() {
    const overlay = document.getElementById('categoryPopupOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function createTopDevicesChart(topDevices) {
    const ctx = document.getElementById('topDevicesChart');
    if (!ctx) return;
    
    if (window.topDevicesChartInstance) {
        window.topDevicesChartInstance.destroy();
    }
    
    window.topDevicesChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topDevices.map(d => d.name.length > 20 ? d.name.substring(0, 20) + '...' : d.name),
            datasets: [{
                label: 'Count',
                data: topDevices.map(d => d.count),
                backgroundColor: '#00ff88',
                borderColor: '#00ff88',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Top 10 Devices by Count',
                    color: '#00d4ff',
                    font: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#8b9dc3' },
                    grid: { color: '#3d4a7a' }
                },
                y: {
                    ticks: { 
                        color: '#8b9dc3', 
                        font: { size: 10 },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: { color: '#3d4a7a' }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10
                }
            }
        }
    });
}

function createGateDistributionChart(gateDeviceCounts) {
    const ctx = document.getElementById('gateDeviceDistChart');
    if (!ctx) return;
    
    if (window.gateDistChartInstance) {
        window.gateDistChartInstance.destroy();
    }
    
    window.gateDistChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(gateDeviceCounts),
            datasets: [{
                label: 'Total Devices',
                data: Object.values(gateDeviceCounts),
                backgroundColor: '#00d4ff',
                borderColor: '#00d4ff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Devices per Gate',
                    color: '#00d4ff',
                    font: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#8b9dc3' },
                    grid: { color: '#3d4a7a' }
                },
                x: {
                    ticks: { color: '#8b9dc3', font: { size: 10 } },
                    grid: { color: '#3d4a7a' }
                }
            }
        }
    });
}

// Fallback analytics when Google Sheets not connected
function loadFallbackAnalytics() {
    const categories = {
        'Surveillance Systems': 230,      // All cameras (calculated from gates)
        'Access Control': 105,             // Barriers, Bollards, Tyre Killers, UVSS, Locks
        'Identification Systems': 161,     // All readers (Face, RFID, QR, Smart Card)
        'Security Screening': 28,          // DFMD, Scanners, Frisking
        'Communication': 166,              // Speakers (IP Horn + Ceiling)
        'Infrastructure': 396              // Poles, Racks, Junction Boxes, Kiosks, Displays, etc.
    };
    
    const topDevices = [
        { name: 'Indoor Dome Camera - 5 MP', count: 114 },
        { name: 'Outdoor Fixed Camera - 5 MP', count: 107 },
        { name: 'Camera Poles', count: 103 },
        { name: 'IP Horn Speaker', count: 86 },
        { name: 'IP Ceiling Speaker', count: 80 },
        { name: 'Face recognition Readers', count: 48 },
        { name: 'QR Code Readers', count: 48 },
        { name: 'Outdoor Junction Box', count: 47 },
        { name: 'Boom Barrier', count: 30 },
        { name: 'Long Range RFID Reader', count: 30 }
    ];
    
    // Calculate actual gate device totals from gateDeviceDistribution
    const gateDeviceCounts = {};
    Object.entries(gateDeviceDistribution).forEach(([gateName, devices]) => {
        const total = Object.values(devices).reduce((sum, count) => sum + count, 0);
        gateDeviceCounts[gateName] = total;
    });
    
    createDeviceCategoryChart(categories);
    createTopDevicesChart(topDevices);
    createGateDistributionChart(gateDeviceCounts);
}

const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxCW1Illfh-kSFWlMwLGuPUAkaNhpwj0ftMgTvsPpHfi3QWqjQF_jClZdI4I78cki8-RA/exec';
let allDevicesData = null;

// Initialize Google Sheets - fetch ALL devices
async function initializeGoogleSheets() {
    try {
        console.log('🔄 Connecting to Google Sheets...');
        
        const response = await fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getDeviceData`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        allDevicesData = await response.json();
        console.log('✅ Connected! Loaded', allDevicesData.devices.length, 'device types from sheet');
        
        updateDashboardFromSheets();
        
    } catch (error) {
        console.error('❌ Failed to connect:', error);
        console.log(' Using fallback data');
        initializeMRPLData();
    }
}

function updateDashboardFromSheets() {
    if (!allDevicesData) return;
    
    let totalCameras = 0, totalANPR = 0, totalBollards = 0;
    
    allDevicesData.devices.forEach(device => {
        const deviceType = device.deviceType.toLowerCase();
        const total = Object.values(device.gates).reduce((sum, count) => sum + count, 0);
        
        if (deviceType.includes('camera') || deviceType.includes('dome') || 
            deviceType.includes('ptz') || deviceType.includes('panoramic')) {
            totalCameras += total;
        }
        if (deviceType.includes('anpr')) totalANPR += total;
        if (deviceType.includes('bollard')) totalBollards += total;
    });
    
    // Update dashboard (skip camera KPIs)
    updateGateTableFromSheets();
    populateGateOperationsTable(); // NEW: Update gate operations table
    updateDeviceInventoryTable(); // NEW: Show all devices
    updateDeviceAnalytics(); // NEW: Show device analytics
    generateAllDeviceCards(); // Regenerate device cards with Google Sheets data
}

function updateGateTableFromSheets() {
    if (!allDevicesData) return;
    
    const tbody = document.querySelector('.data-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const gates = {};
    allDevicesData.devices.forEach(device => {
        Object.keys(device.gates).forEach(gateName => {
            if (!gates[gateName]) gates[gateName] = { cameras: 0, anpr: 0, bollards: 0 };
            
            const deviceType = device.deviceType.toLowerCase();
            const count = device.gates[gateName];
            
            if (deviceType.includes('camera') || deviceType.includes('dome') || 
                deviceType.includes('ptz') || deviceType.includes('panoramic')) {
                gates[gateName].cameras += count;
            }
            if (deviceType.includes('anpr')) gates[gateName].anpr += count;
            if (deviceType.includes('bollard')) gates[gateName].bollards += count;
        });
    });
    
    Object.entries(gates).slice(0, 10).forEach(([gateName, data]) => {
        const online = Math.floor(data.cameras * 0.95);
        const statusClass = online === data.cameras ? 'good' : 'warning';
        const status = online === data.cameras ? 'ONLINE' : 'WARNING';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gateName}</td>
            <td>${online}/${data.cameras}</td>
            <td>${data.anpr > 0 ? '✓' : '✗'}</td>
            <td>${data.bollards > 0 ? '✓' : '✗'}</td>
            <td><span class="status-badge ${statusClass}">${status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// NEW: Update complete device inventory table with ALL devices
function updateDeviceInventoryTable() {
    if (!allDevicesData) return;
    
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    let totalDevices = 0;
    let totalDeviceTypes = allDevicesData.devices.length;
    
    // Sort devices alphabetically
    const sortedDevices = [...allDevicesData.devices].sort((a, b) => 
        a.deviceType.localeCompare(b.deviceType)
    );
    
    sortedDevices.forEach(device => {
        const deviceTotal = Object.values(device.gates).reduce((sum, count) => sum + count, 0);
        totalDevices += deviceTotal;
        
        // Create gate distribution string
        const gateDistribution = Object.entries(device.gates)
            .filter(([gate, count]) => count > 0)
            .map(([gate, count]) => `${gate}: ${count}`)
            .join(' | ');
        
        const row = document.createElement('tr');
        row.className = 'device-row';
        row.innerHTML = `
            <td style="font-weight: 600; color: #00d4ff;">${device.deviceType}</td>
            <td style="font-weight: bold; font-size: 1.2rem; color: #00ff88;">${deviceTotal}</td>
            <td style="font-size: 0.9rem; color: #8b9dc3;">${gateDistribution || 'Not deployed'}</td>
        `;
        tbody.appendChild(row);
    });
    
    // Update summary
    const summary = document.getElementById('inventorySummary');
    if (summary) {
        summary.innerHTML = `
            <strong>${totalDeviceTypes}</strong> device types | 
            <strong>${totalDevices}</strong> total devices | 
            <strong>${Object.keys(allDevicesData.devices[0]?.gates || {}).length}</strong> gates
        `;
    }
}

// Search/filter devices
function filterDevices() {
    const searchInput = document.getElementById('deviceSearch');
    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('.device-row');
    
    let visibleCount = 0;
    rows.forEach(row => {
        const deviceName = row.cells[0].textContent.toLowerCase();
        if (deviceName.includes(filter)) {
            row.style.display = '';
            visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });
    
    // Show count of filtered results
    if (filter) {
        const summary = document.getElementById('inventorySummary');
        if (summary) {
            summary.innerHTML = `Showing <strong>${visibleCount}</strong> devices matching "${filter}"`;
        }
    }
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    document.getElementById('currentTime').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Dashboard navigation
function showDashboard(dashboardId) {
    document.querySelectorAll('.dashboard-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(dashboardId).classList.add('active');
    event.target.classList.add('active');
}

// Update dashboard with MRPL data
function updateDashboardWithMRPLData() {
    // Skip KPI cards update as they're removed
    
    // Calculate percentages
    const anprWorking = Math.round((40 / 42) * 100);
    const frWorking = Math.round((71 / 75) * 100);
    updateElement('anprStatus', anprWorking + '%');
    updateElement('frStatus', frWorking + '%');
    
    // Update gate table
    updateGateTable();
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = typeof value === 'number' ? value.toLocaleString() : value;
    }
}

function updateGateTable() {
    const tbody = document.querySelector('.data-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.entries(MRPL_DEVICE_DATA.gates).forEach(([gateName, data]) => {
        const row = document.createElement('tr');
        const statusClass = data.status === 'ONLINE' ? 'good' : 'warning';
        row.innerHTML = `
            <td>${gateName}</td>
            <td>${data.cameras}</td>
            <td>${data.anpr > 0 ? '✓' : '✗'}</td>
            <td>${data.bollards > 0 ? '✓' : '✗'}</td>
            <td><span class="status-badge ${statusClass}">${data.status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function showConnectionStatus(connected) {
    let indicator = document.getElementById('mrpl-status');
    
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'mrpl-status';
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            z-index: 1000;
            background: rgba(0, 255, 136, 0.2);
            border: 2px solid #00ff88;
            color: #00ff88;
        `;
        document.body.appendChild(indicator);
    }
    
    indicator.textContent = '🟢 MRPL BOQ Data Loaded';
}

// Initialize charts when page loads
window.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    simulateLiveData();
    initializeGoogleSheets(); // Try Google Sheets first, fallback to mock data
    initializeIncidentCharts(); // Initialize incident analytics charts
    
    // Ensure gate health table is populated
    setTimeout(() => {
        if (document.getElementById('gateHealthTableBody').children.length === 0) {
            console.log(' Table empty, populating now...');
            populateGateHealthTable();
        }
    }, 500);
});

function initializeCharts() {
    // Device Status by Category Chart - Start with Cameras
    showCategoryStatus('Cameras');

    // Uptime Trend Chart
    const uptimeTrendCtx = document.getElementById('uptimeTrendChart');
    if (uptimeTrendCtx) {
        new Chart(uptimeTrendCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Uptime %',
                    data: [98.5, 99.2, 98.8, 99.5, 99.1, 98.9, 99.2],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#00d4ff',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 95,
                        max: 100,
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    },
                    x: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: '#e0e0e0' }
                    }
                }
            }
        });
    }

    // Gender Analytics Chart
    const genderCtx = document.getElementById('genderChart');
    if (genderCtx) {
        new Chart(genderCtx, {
            type: 'bar',
            data: {
                labels: ['Employees', 'Contractors', 'Visitors'],
                datasets: [
                    {
                        label: 'Male',
                        data: [520, 245, 120],
                        backgroundColor: '#00d4ff'
                    },
                    {
                        label: 'Female',
                        data: [130, 35, 45],
                        backgroundColor: '#ff3366'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    },
                    x: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: '#e0e0e0' }
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // Hourly Entry Pattern Chart
    const hourlyEntryCtx = document.getElementById('hourlyEntryChart');
    if (hourlyEntryCtx) {
        new Chart(hourlyEntryCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                datasets: [{
                    label: 'Entries',
                    data: [12, 8, 5, 45, 320, 280, 180, 220, 240, 150, 80, 35],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#00d4ff',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    },
                    x: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // Vehicle Type Chart
    const vehicleTypeCtx = document.getElementById('vehicleTypeChart');
    if (vehicleTypeCtx) {
        new Chart(vehicleTypeCtx, {
            type: 'doughnut',
            data: {
                labels: ['2-Wheeler', '4-Wheeler', 'Trucks', 'Tankers', 'Company Vehicles'],
                datasets: [{
                    data: [145, 85, 35, 12, 8],
                    backgroundColor: ['#00d4ff', '#00ff88', '#ffaa00', '#ff3366', '#8b9dc3'],
                    borderWidth: 2,
                    borderColor: '#1a1f3a'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#e0e0e0', font: { size: 11 } }
                    }
                }
            }
        });
    }

    // Gate Movement Chart
    const gateMovementCtx = document.getElementById('gateMovementChart');
    if (gateMovementCtx) {
        new Chart(gateMovementCtx, {
            type: 'bar',
            data: {
                labels: ['Main Gate', 'Cargo Gate', 'LP Gate', 'Jokatte Gate', 'Railway Sliding'],
                datasets: [
                    {
                        label: 'Entries',
                        data: [450, 300, 280, 150, 70],
                        backgroundColor: '#00ff88'
                    },
                    {
                        label: 'Exits',
                        data: [430, 280, 270, 140, 60],
                        backgroundColor: '#00d4ff'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    },
                    x: {
                        ticks: { color: '#8b9dc3' },
                        grid: { color: '#3d4a7a' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: '#e0e0e0' }
                    }
                }
            }
        });
    }
}

// Simulate live data updates
function simulateLiveData() {
    // Update gate operations table every 5 seconds
    setInterval(() => {
        const tbody = document.getElementById('gateOperationsTable');
        if (!tbody || tbody.children.length === 0) return;
        
        Array.from(tbody.children).forEach(row => {
            const cells = row.children;
            if (cells.length >= 5) {
                // Get current values
                const entriesCell = cells[2];
                const exitsCell = cells[3];
                const insideCell = cells[4];
                
                const currentEntries = parseInt(entriesCell.textContent.replace(',', ''));
                const currentExits = parseInt(exitsCell.textContent.replace(',', ''));
                
                // Randomly increment entries/exits
                const newEntries = currentEntries + (Math.random() > 0.6 ? 1 : 0);
                const newExits = currentExits + (Math.random() > 0.7 ? 1 : 0);
                const newInside = newEntries - newExits;
                
                entriesCell.textContent = newEntries.toLocaleString();
                exitsCell.textContent = newExits.toLocaleString();
                insideCell.textContent = newInside;
            }
        });
    }, 5000);
    
    setInterval(() => {
        // Update live counters with random variations
        const entries = document.getElementById('totalEntries');
        const exits = document.getElementById('totalExits');
        const inside = document.getElementById('currentlyInside');
        
        if (entries && exits && inside) {
            const currentEntries = parseInt(entries.textContent.replace(',', ''));
            const currentExits = parseInt(exits.textContent.replace(',', ''));
            
            // Randomly increment entries/exits
            if (Math.random() > 0.5) {
                entries.textContent = (currentEntries + 1).toLocaleString();
            }
            if (Math.random() > 0.6) {
                exits.textContent = (currentExits + 1).toLocaleString();
            }
            
            // Update inside count
            const newInside = parseInt(entries.textContent.replace(',', '')) - parseInt(exits.textContent.replace(',', ''));
            inside.textContent = newInside.toLocaleString();
        }
    }, 5000);
}

// Report generation function
function generateReport(reportType) {
    alert(`Generating ${reportType} report...\n\nThis would typically:\n- Fetch data from backend\n- Generate PDF/Excel\n- Download or email report\n\nReport Type: ${reportType.toUpperCase()}`);
}

// Add click handlers for interactive elements
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-action')) {
        const row = e.target.closest('tr');
        const incidentId = row.querySelector('td').textContent;
        alert(`Opening incident details for ${incidentId}\n\nThis would show:\n- Full incident details\n- Camera snapshots\n- Officer notes\n- Resolution actions`);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        switch(e.key) {
            case '1':
                document.querySelector('[onclick*="availability"]').click();
                break;
            case '2':
                document.querySelector('[onclick*="functional"]').click();
                break;
            case '3':
                document.querySelector('[onclick*="incident"]').click();
                break;
            case '4':
                document.querySelector('[onclick*="reports"]').click();
                break;
        }
    }
});

console.log('MRPL ISCC Dashboard Loaded');
console.log('Keyboard Shortcuts: Alt+1/2/3/4 to switch dashboards');


// Category Status Data
const categoryStatusData = {
    'Cameras': { online: 462, warning: 18, maintenance: 5, offline: 2 },
    'Access Control': { online: 98, warning: 4, maintenance: 1, offline: 1 },
    'Displays': { online: 60, warning: 3, maintenance: 1, offline: 0 },
    'Readers': { online: 152, warning: 6, maintenance: 2, offline: 0 },
    'Security Equipment': { online: 28, warning: 1, maintenance: 1, offline: 0 },
    'Infrastructure': { online: 210, warning: 8, maintenance: 2, offline: 0 }
};

let deviceStatusChartInstance = null;

function showCategoryStatus(category) {
    const ctx = document.getElementById('deviceStatusChart');
    if (!ctx) return;
    
    // Update selected category label
    const label = document.getElementById('selectedCategory');
    if (label) label.textContent = category;
    
    // Destroy existing chart
    if (deviceStatusChartInstance) {
        deviceStatusChartInstance.destroy();
    }
    
    const data = categoryStatusData[category];
    
    // Create pie chart
    deviceStatusChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Online', 'Warning', 'Maintenance', 'Offline'],
            datasets: [{
                data: [data.online, data.warning, data.maintenance, data.offline],
                backgroundColor: ['#00ff88', '#ffaa00', '#8b9dc3', '#ff3366'],
                borderWidth: 2,
                borderColor: '#1a1f3a'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        color: '#e0e0e0', 
                        font: { size: 12 },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}


let currentDeviceType = '';
let currentDeviceData = [];

// Show device details modal
function showDeviceDetails(type) {
    currentDeviceType = type;
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const tbody = document.getElementById('deviceDetailsBody');
    
    // Prepare data based on type - USING EXACT BOQ NUMBERS
    currentDeviceData = [];
    let title = '';
    let deviceCounter = 1;
    
    if (type === 'total') {
        title = 'Total Cameras - Complete List (As per BOQ)';
        
        // Create individual device entries for each camera
        MRPL_DEVICE_DATA.cameraTypes.forEach(camera => {
            const gates = Object.keys(MRPL_DEVICE_DATA.gates);
            const baseCount = Math.floor(camera.total / gates.length);
            const remainder = camera.total % gates.length;
            
            gates.forEach((gate, gateIndex) => {
                const gateTotal = baseCount + (gateIndex < remainder ? 1 : 0);
                const gateOnline = Math.floor(gateTotal * 0.95);
                const gateOffline = gateTotal - gateOnline;
                
                // Add individual online cameras
                for (let i = 0; i < gateOnline; i++) {
                    currentDeviceData.push({
                        type: camera.type,
                        gate: gate,
                        count: 1,
                        online: 1,
                        offline: 0,
                        status: 'Online',
                        deviceNumber: deviceCounter++
                    });
                }
                
                // Add individual offline cameras
                for (let i = 0; i < gateOffline; i++) {
                    currentDeviceData.push({
                        type: camera.type,
                        gate: gate,
                        count: 1,
                        online: 0,
                        offline: 1,
                        status: 'Offline',
                        deviceNumber: deviceCounter++
                    });
                }
            });
        });
        
    } else if (type === 'online') {
        title = 'Online Cameras - Operational Devices';
        
        // Create individual online camera entries
        MRPL_DEVICE_DATA.cameraTypes.forEach(camera => {
            const onlineCount = camera.type === 'ANPR Cameras' ? 40 : 
                               camera.type === 'Face recognition Cameras' ? 71 :
                               Math.floor(camera.total * 0.95);
            
            const gates = Object.keys(MRPL_DEVICE_DATA.gates);
            const baseCount = Math.floor(onlineCount / gates.length);
            const remainder = onlineCount % gates.length;
            
            gates.forEach((gate, gateIndex) => {
                const gateCount = baseCount + (gateIndex < remainder ? 1 : 0);
                
                for (let i = 0; i < gateCount; i++) {
                    currentDeviceData.push({
                        type: camera.type,
                        gate: gate,
                        count: 1,
                        online: 1,
                        offline: 0,
                        status: 'Online',
                        deviceNumber: deviceCounter++
                    });
                }
            });
        });
        
    } else if (type === 'offline') {
        title = 'Offline Cameras - Devices Requiring Attention';
        
        // Create individual offline camera entries
        MRPL_DEVICE_DATA.cameraTypes.forEach(camera => {
            const offlineCount = camera.type === 'ANPR Cameras' ? 2 : 
                                camera.type === 'Face recognition Cameras' ? 4 :
                                Math.ceil(camera.total * 0.05);
            
            if (offlineCount > 0) {
                const gates = ['Cargo Gate', 'Main Gate', 'LP Gate', 'E2 Gate'];
                
                for (let i = 0; i < offlineCount; i++) {
                    const assignedGate = gates[i % gates.length];
                    currentDeviceData.push({
                        type: camera.type,
                        gate: assignedGate,
                        count: 1,
                        online: 0,
                        offline: 1,
                        status: 'Offline',
                        deviceNumber: deviceCounter++
                    });
                }
            }
        });
    }
    
    // Update modal title
    modalTitle.textContent = title;
    
    // Populate table
    tbody.innerHTML = '';
    currentDeviceData.forEach((device, index) => {
        const row = document.createElement('tr');
        const statusBadge = device.offline > 0 ? 
            `<span class="status-badge offline">Offline</span>` :
            `<span class="status-badge online">Online</span>`;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${device.type} #${device.deviceNumber}</td>
            <td>${device.gate}</td>
            <td>${device.count}</td>
            <td>${statusBadge}</td>
        `;
        tbody.appendChild(row);
    });
    
    // Backup data
    allDeviceDataBackup = [...currentDeviceData];
    
    // Show modal
    modal.style.display = 'block';
}

// Close modal
function closeDeviceModal() {
    document.getElementById('deviceModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('deviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Download device list
// Download device report with filter (all/online/offline)
function downloadDeviceReport(filterType, format) {
    if (currentDeviceData.length === 0) {
        alert('No data to download');
        return;
    }
    
    // Filter data based on type
    let filteredData = [];
    let reportTitle = '';
    
    if (filterType === 'all') {
        filteredData = currentDeviceData;
        reportTitle = 'All Devices';
    } else if (filterType === 'online') {
        filteredData = currentDeviceData.filter(device => {
            if (device.offline !== undefined) {
                return device.offline === 0;
            }
            return device.status && device.status.toLowerCase().includes('online');
        });
        reportTitle = 'Online Devices';
    } else if (filterType === 'offline') {
        filteredData = currentDeviceData.filter(device => {
            if (device.offline !== undefined) {
                return device.offline > 0;
            }
            return device.status && device.status.toLowerCase().includes('offline');
        });
        reportTitle = 'Offline Devices';
    }
    
    if (filteredData.length === 0) {
        alert(`No ${filterType} devices found!`);
        return;
    }
    
    const modalTitle = document.getElementById('modalTitle').textContent;
    const dateStr = new Date().toISOString().split('T')[0];
    const deviceName = currentDeviceType.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `MRPL_${deviceName}_${filterType}_${dateStr}`;
    
    if (format === 'pdf') {
        // PDF format
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Add header
        doc.setFontSize(18);
        doc.setTextColor(0, 212, 255);
        doc.text('MRPL ISCC Dashboard', 14, 20);
        
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(`${modalTitle} - ${reportTitle}`, 14, 30);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 38);
        doc.text(`Total Records: ${filteredData.length}`, 14, 44);
        
        // Prepare table data
        const tableData = filteredData.map((device, index) => {
            const status = device.status || (device.offline > 0 ? `${device.offline} Offline` : 'Online');
            return [
                index + 1,
                device.type,
                device.gate,
                device.count,
                status
            ];
        });
        
        // Add table
        doc.autoTable({
            startY: 50,
            head: [['Sr. No.', 'Device Type', 'Gate', 'Count', 'Status']],
            body: tableData,
            theme: 'grid',
            headStyles: {
                fillColor: filterType === 'online' ? [0, 255, 136] : 
                          filterType === 'offline' ? [255, 51, 102] : [0, 212, 255],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            styles: {
                fontSize: 9,
                cellPadding: 3
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            }
        });
        
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(
                `Page ${i} of ${pageCount} | MRPL - Integrated Security Command & Control System`,
                doc.internal.pageSize.getWidth() / 2,
                doc.internal.pageSize.getHeight() - 10,
                { align: 'center' }
            );
        }
        
        doc.save(`${fileName}.pdf`);
        alert(`✅ Downloaded: ${fileName}.pdf`);
        
    } else if (format === 'csv') {
        // CSV format
        let content = 'Sr. No.,Device Type,Gate,Count,Status\n';
        filteredData.forEach((device, index) => {
            const status = device.status || (device.offline > 0 ? `${device.offline} Offline` : 'Online');
            content += `${index + 1},"${device.type}","${device.gate}",${device.count},"${status}"\n`;
        });
        
        const blob = new Blob([content], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        alert(`✅ Downloaded: ${fileName}.csv`);
        
    } else if (format === 'excel') {
        // Excel format
        let content = '\uFEFF'; // UTF-8 BOM
        content += 'Sr. No.\tDevice Type\tGate\tCount\tStatus\n';
        filteredData.forEach((device, index) => {
            const status = device.status || (device.offline > 0 ? `${device.offline} Offline` : 'Online');
            content += `${index + 1}\t${device.type}\t${device.gate}\t${device.count}\t${status}\n`;
        });
        
        const blob = new Blob([content], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.xls`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        alert(`✅ Downloaded: ${fileName}.xls`);
    }
}

// Keep old function for backward compatibility
function downloadDeviceList(format) {
    downloadDeviceReport('all', format);
}

// Update KPI display format
function updateKPIFormats() {
    // Skip KPI updates as cards are removed
    // This function is kept for compatibility but does nothing
}


// Device icons mapping
const deviceIcons = {
    'Gate': '🚪',
    'Automatic Tyre Killer': '🛞',
    'Manual Tyre Killer': '⚠️',
    'Under Vehicle Surveillance System (UVSS)': '🔍',
    'Bollards': '🛑',
    'Boom Barrier': '⛔',
    'Swing Barriers': '🚧',
    'Visitor Kiosks': '🖥️',
    '32" Overhead Display': '📺',
    'Indoor Digital Displays': '🖼️',
    'Outdoor Digital Displays': '📱',
    'Video Wall (6 x 3)': '📺',
    'Video Wall (2 x 3)': '📺',
    'Door Frame Metal Detector (DFMD)': '🚪',
    'Baggage Scanner': '📦',
    'Frisking Booth': '🔒',
    'Long Range RFID Reader': '📡',
    'Push Button for Boom Barrier': '🔘',
    'Electro Magnetic Locks': '🔐',
    'Indoor Dome Cameras- 5 MP': '📹',
    'Outdoor Fixed Cameras- 5 MP': '�',
    'Indoor Dome Camera - 5 MP': '�📹',
    'Outdoor Fixed Camera - 5 MP': '📷',
    'Indoor Dome Camera- 5 MP': '📹',
    'Outdoor Fixed Camera- 5 MP': '📷',
    'PTZ with IR - 2MP': '🎥',
    'Panoramic Camera - 180° - 20 MP': '📸',
    'Panoramic Camera - 360° - 20 MP': '🌐',
    'Panoramic Camera- 180° - 20 MP': '📸',
    'Panoramic Camera- 360° - 20 MP': '🌐',
    'ANPR Cameras': '🚗',
    'Face recognition Cameras': '👤',
    'IP Horn Speaker': '📢',
    'IP Ceiling Speaker': '🔊',
    'Master & Local Control Desks': '🎛️',
    'Face recognition Readers': '👁️',
    'Smart Card Reader': '💳',
    'QR Code Readers': '📱',
    'Camera Poles': '📍',
    'Rack (12U)': '🗄️',
    'Outdoor Junction Box': '📦',
    'Portable face readers (buses)': '🚌',
    'Portable face readers (gates)': '🚪',
    '10 finger enrolment readers': '✋',
    'Indoor signages': '🪧',
    'Wireless Access Point': '📶',
    'Video Conferencing Solution': '💻',
    'Switches': '🗄️',
    'Diesel Generator Set': '⚡'
};

// All devices from BOQ
const allBOQDevices = [
    { type: 'Gates', total: 8, online: 8, offline: 0 },
    { type: 'Automatic Tyre Killers', total: 3, online: 3, offline: 0 },
    { type: 'Under Vehicle Surveillance Systems (UVSS)', total: 6, online: 6, offline: 0 },
    { type: 'Bollards', total: 24, online: 24, offline: 0 },
    { type: 'Boom Barriers', total: 30, online: 30, offline: 0 },
    { type: 'Swing Barriers', total: 24, online: 24, offline: 0 },
    { type: 'Visitor Kiosks', total: 6, online: 5, offline: 1 },
    { type: '32" Overhead Displays', total: 19, online: 19, offline: 0 },
    { type: 'Indoor Digital Displays', total: 8, online: 7, offline: 1 },
    { type: 'Outdoor Digital Displays', total: 9, online: 8, offline: 1 },
    { type: 'Video Wall (6 x 3)', total: 1, online: 1, offline: 0 },
    { type: 'Video Wall (2 x 3)', total: 1, online: 1, offline: 0 },
    { type: 'Door Frame Metal Detectors (DFMD)', total: 15, online: 15, offline: 0 },
    { type: 'Baggage Scanners', total: 8, online: 8, offline: 0 },
    // { type: 'Frisking Booths', total: 10, online: 10, offline: 0 },
    { type: 'Long Range RFID Readers', total: 30, online: 30, offline: 0 },
    { type: 'Push Button for Boom Barriers', total: 30, online: 30, offline: 0 },
    { type: 'Electro Magnetic Locks', total: 7, online: 7, offline: 0 },
    { type: 'Indoor Dome Cameras- 5 MP', total: 114, online: 108, offline: 6 },
    { type: 'Outdoor Fixed Cameras- 5 MP', total: 107, online: 100, offline: 7 },
    { type: 'PTZ with IR - 2MP', total: 6, online: 4, offline: 2 },
    { type: 'Panoramic Cameras- 180° - 20 MP', total: 9, online: 8, offline: 1 },
    { type: 'Panoramic Cameras- 360° - 20 MP', total: 22, online: 21, offline: 1 },
    { type: 'ANPR Cameras', total: 20, online: 18, offline: 2 },
    { type: 'Face recognition Cameras', total: 25, online: 21, offline: 4 },
    { type: 'IP Horn Speakers', total: 86, online: 86, offline: 0 },
    { type: 'IP Ceiling Speakers', total: 80, online: 80, offline: 0 },
    { type: 'Master & Local Control Desks', total: 7, online: 7, offline: 0 },
    { type: 'Face recognition Readers', total: 48, online: 47, offline: 1 },
    // { type: 'Smart Card Readers', total: 50, online: 50, offline: 0 },
    { type: 'QR Code Readers', total: 48, online: 48, offline: 0 },
    // { type: 'Camera Poles', total: 85, online: 85, offline: 0 },
    { type: 'Racks (12U)', total: 19, online: 19, offline: 0 },
    { type: 'Outdoor Junction Boxes', total: 47, online: 47, offline: 0 },
    { type: 'Portable face readers (buses)', total: 20, online: 20, offline: 0 },
    { type: 'Portable face readers (gates)', total: 4, online: 4, offline: 0 },
    { type: '10 finger enrolment readers', total: 4, online: 4, offline: 0 },
    { type: 'Speed Track Displays', total: 30, online: 30, offline: 0 },
    // { type: 'Indoor signages', total: 50, online: 50, offline: 0 },
    { type: 'Wireless Access Points', total: 2, online: 2, offline: 0 },
    { type: 'Video Conferencing Solutions', total: 2, online: 2, offline: 0 },
    { type: 'Switches', total: 8, online: 8, offline: 0 },
    { type: 'Speed Guns', total: 20, online: 20, offline: 0 },
    // { type: 'Diesel Generator Set', total: 2, online: 2, offline: 0 }
];

function generateAllDeviceCards() {
    const grid = document.getElementById('allDevicesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const devicesSource = allDevicesData ? allDevicesData.devices : allBOQDevices.map(d => ({
        deviceType: d.type,
        gates: {},
        total: d.total,
        online: d.online,
        offline: d.offline
    }));
    
    devicesSource.forEach(device => {
        const card = document.createElement('div');
        card.className = 'device-card';
        
        // Calculate totals from gates if using Google Sheets data
        let total, online, offline;
        if (allDevicesData) {
            total = Object.values(device.gates).reduce((sum, count) => sum + count, 0);
            // Simulate online/offline (85% online for demo)
            online = Math.round(total * 0.95);
            offline = total - online;
        } else {
            total = device.total;
            online = device.online;
            offline = device.offline;
        }
        
        const deviceObj = {
            type: device.deviceType || device.type,
            total: total,
            online: online,
            offline: offline
        };
        
        card.onclick = () => showSpecificDeviceDetails(deviceObj);
        
        const icon = deviceIcons[deviceObj.type] || '📦';
        
        card.innerHTML = `
            <div class="device-count">${online}/${total}</div>
            <div class="device-status">Live / Total</div>
            <div class="device-name">${deviceObj.type}</div>
            <div class="click-hint">Click for details</div>
        `;
        
        grid.appendChild(card);
    });
}

// Show specific device details
function showSpecificDeviceDetails(device) {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const tbody = document.getElementById('deviceDetailsBody');
    
    currentDeviceType = device.type;
    currentDeviceData = [];
    
    // Get gates where this device is located from deviceGateLocations
    const deviceGates = deviceGateLocations[device.type] || [];
    
    let deviceCounter = 1;
    
    if (deviceGates.length === 0) {
        // Fallback: distribute evenly if no mapping found
        const gates = Object.keys(MRPL_DEVICE_DATA.gates);
        
        // Create one entry per gate with aggregated count
        const onlinePerGate = Math.floor(device.online / gates.length);
        const offlinePerGate = Math.floor(device.offline / gates.length);
        
        gates.forEach((gate, index) => {
            const gateOnline = onlinePerGate + (index === 0 ? device.online % gates.length : 0);
            const gateOffline = offlinePerGate + (index === 0 ? device.offline % gates.length : 0);
            const gateTotal = gateOnline + gateOffline;
            
            if (gateTotal > 0) {
                currentDeviceData.push({
                    type: device.type,
                    gate: gate,
                    count: gateTotal,
                    online: gateOnline,
                    offline: gateOffline,
                    status: gateOffline > 0 ? 'Offline' : 'Online',
                    deviceNumber: deviceCounter++
                });
            }
        });
    } else {
        // Use deviceGateLocations mapping - show EACH gate location as separate row
        // First, calculate total count across all gates
        let totalCountAcrossGates = 0;
        const gateCountsTemp = [];
        
        deviceGates.forEach((gateLocation) => {
            let count = 1;
            const mainGateName = gateLocation.split(':')[0].trim();
            
            if (gateDeviceDistribution[mainGateName] && gateDeviceDistribution[mainGateName][device.type]) {
                count = gateDeviceDistribution[mainGateName][device.type];
            }
            
            gateCountsTemp.push({ gateLocation, count });
            totalCountAcrossGates += count;
        });
        
        let remainingOffline = device.offline;
        
        gateCountsTemp.forEach((gateData, index) => {
            const { gateLocation, count } = gateData;
            
            // Calculate proportional offline for this gate
            let gateOffline = 0;
            if (totalCountAcrossGates > 0) {
                // Proportional distribution
                const proportion = count / totalCountAcrossGates;
                gateOffline = Math.round(device.offline * proportion);
                
                // Adjust for rounding on last gate
                if (index === gateCountsTemp.length - 1) {
                    gateOffline = remainingOffline;
                } else {
                    remainingOffline -= gateOffline;
                }
            }
            
            const gateOnline = count - gateOffline;
            
            currentDeviceData.push({
                type: device.type,
                gate: gateLocation,
                count: count,
                online: gateOnline,
                offline: gateOffline,
                status: gateOffline > 0 ? 'Offline' : 'Online',
                deviceNumber: deviceCounter++
            });
        });
    }
    
    // Update modal
    modalTitle.textContent = `${device.type} - Detailed Breakdown`;
    
    // Populate table with ENTRY and EXIT rows
    tbody.innerHTML = '';
    let rowCounter = 1;
    
    currentDeviceData.forEach((item) => {
        // Generate restoration time for offline devices
        const getRestorationTime = (offlineCount) => {
            if (offlineCount === 0) return 'All Operational';
            const hours = Math.floor(Math.random() * 4) + 1; // 1-4 hours
            return `Restoration in ${hours}h`;
        };
        
        // Single Row per device/gate - no ENTRY/EXIT split
        if (item.count > 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rowCounter++}</td>
                <td>${item.type}</td>
                <td>${item.gate}</td>
                <td>${item.count}</td>
                <td style="color: #00ff88; font-weight: 600;">${item.online}</td>
                <td style="color: #ff4d4d; font-weight: 600;">${item.offline}</td>
                <td style="color: ${item.offline > 0 ? '#ffaa00' : '#00ff88'}; font-size: 0.85rem;">${getRestorationTime(item.offline)}</td>
            `;
            tbody.appendChild(row);
        }
    });
    
    // Backup data
    allDeviceDataBackup = [...currentDeviceData];
    
    // Show modal
    modal.style.display = 'block';
}

// Initialize device cards on page load
document.addEventListener('DOMContentLoaded', () => {
    generateAllDeviceCards();
});


let currentReportView = 'all';
let allDeviceDataBackup = [];

// Note: switchReportView and updateTableView functions removed as filtering is no longer needed
// All devices are shown in ENTRY/EXIT format directly in the table

// Download current report view as PDF
function downloadCurrentReport(filterType = 'all') {
    const tbody = document.getElementById('deviceDetailsBody');
    const rows = tbody.querySelectorAll('tr');
    
    if (rows.length === 0) {
        alert('No data to download');
        return;
    }
    
    const modalTitle = document.getElementById('modalTitle').textContent;
    const dateStr = new Date().toISOString().split('T')[0];
    const deviceName = currentDeviceType.replace(/[^a-zA-Z0-9]/g, '_');
    
    // Filter rows based on filterType
    let filteredRows = [];
    rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
            const offlineCount = parseInt(cells[6].textContent) || 0;
            const onlineCount = parseInt(cells[5].textContent) || 0;
            
            if (filterType === 'all') {
                filteredRows.push(row);
            } else if (filterType === 'online' && offlineCount === 0 && onlineCount > 0) {
                filteredRows.push(row);
            } else if (filterType === 'offline' && offlineCount > 0) {
                filteredRows.push(row);
            }
        }
    });
    
    if (filteredRows.length === 0) {
        alert(`No ${filterType} devices found to download`);
        return;
    }
    
    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape'); // Landscape for more columns
    
    // Header with filter type
    const filterLabel = filterType === 'all' ? 'All Devices' : 
                       filterType === 'online' ? 'Online Devices Only' : 
                       'Offline Devices Only';
    
    doc.setFontSize(18);
    doc.setTextColor(0, 212, 255);
    doc.text('MRPL ISCC Dashboard', 14, 20);
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`${modalTitle} - ${filterLabel}`, 14, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 38);
    doc.text(`Total Records: ${filteredRows.length}`, 14, 44);
    
    // Table data - extract from filtered rows
    const tableData = [];
    filteredRows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        tableData.push([
            index + 1,                // Renumber Sr. No.
            cells[1].textContent,     // Device Type
            cells[2].textContent,     // Gate
            cells[3].textContent,     // Zone
            cells[4].textContent,     // Total
            cells[5].textContent,     // Online
            cells[6].textContent,     // Offline
            cells[7].textContent      // Remark
        ]);
    });
    
    // Set header color based on filter type
    const headerColor = filterType === 'online' ? [0, 255, 136] : 
                       filterType === 'offline' ? [255, 77, 77] : 
                       [0, 212, 255];
    
    // Add table
    doc.autoTable({
        startY: 50,
        head: [['Sr. No.', 'Device Type', 'Gate',  'Total', 'Online', 'Offline', 'Remark']],
        body: tableData,
        theme: 'grid',
        headStyles: {
            fillColor: headerColor,
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        },
        columnStyles: {
            0: { cellWidth: 15 },  // Sr. No.
            1: { cellWidth: 50 },  // Device Type
            2: { cellWidth: 45 },  // Gate
           
            4: { cellWidth: 20 },  // Total
            5: { cellWidth: 25 },  // Online
            6: { cellWidth: 25 },  // Offline
            7: { cellWidth: 45 }   // Remark
        }
    });
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
            `Page ${i} of ${pageCount} | MRPL - Integrated Security Command & Control System`,
            doc.internal.pageSize.getWidth() / 2,
            doc.internal.pageSize.getHeight() - 10,
            { align: 'center' }
        );
    }
    
    const filterSuffix = filterType === 'all' ? 'All' : 
                        filterType === 'online' ? 'Online' : 
                        'Offline';
    const filename = `MRPL_${deviceName}_${filterSuffix}_${dateStr}.pdf`;
    doc.save(filename);
    alert(`✅ Downloaded: ${filename}`);
}


function toggleShowMore() {
    const grid = document.getElementById('allDevicesGrid');
    const btn = document.getElementById('showMoreBtn');
    
    if (grid.style.maxHeight === '220px' || grid.style.maxHeight === '') {
        // Expand to show all cards
        grid.style.maxHeight = 'none';
        btn.innerHTML = 'Show Less ▲';
        btn.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
    } else {
        grid.style.maxHeight = '220px';
        btn.innerHTML = 'Show More ▼';
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


let currentSelectedGate = 'all';
let gateDevicePieChart = null;

const gateDeviceDistribution = {
    'Main Gate': {'Automatic Tyre Killer': 1,'Manual Tyre Killer': 1,'Under Vehicle Surveillance Systems (UVSS)': 2,'Bollards': 8,'Boom Barriers': 4,'Swing Barriers': 8,'Visitor Kiosks': 3,'32" Overhead Displays': 3,'Indoor Digital Displays': 2,'Outdoor Digital Displays': 3,'Video Wall (6 x 3)': 1,'Door Frame Metal Detectors (DFMD)': 6,'Baggage Scanners': 2,'Frisking Booth': 1,'Long Range RFID Readers': 8,'Push Button for Boom Barriers': 8,'EM Locks': 3,'Indoor Dome Cameras - 5 MP': 35,'Outdoor Fixed Cameras - 5 MP': 26,'PTZ with IR - 2MP': 2,'Panoramic Camera - 180° - 20 MP': 1,'Panoramic Cameras - 360° - 20 MP': 8,'ANPR Cameras': 4,'Speed Guns': 4,'Face recognition Cameras': 4,'IP Horn Speakers': 31,'IP Ceiling Speakers': 28,'Face recognition Readers': 14,'Smart Card Reader': 1,'QR Code Readers': 14,'Camera Poles': 4,'Racks (12U)': 2,'Outdoor Junction Boxes': 16,'Portable face readers (buses)': 20,'Portable face readers (on gates)': 4,'10 finger enrolment readers': 2,'Indoor signages': 10,'Video Conferencing Solutions': 2,'Switch': 1,'Diesel Generator Set': 1},
    
    'LP Gate': {'Automatic Tyre Killer': 1,'Manual Tyre Killer': 1,'Bollards': 8,'Boom Barriers': 4,'Swing Barriers': 4,'Visitor Kiosk': 1,'32" Overhead Displays': 2,'Indoor Digital Display': 1,'Outdoor Digital Displays': 2,'Door Frame Metal Detector (DFMD)': 1,'Baggage Scanner': 1,'Frisking Booth': 1,'Long Range RFID Readers': 4,'Push Button for Boom Barriers': 4,'EM Locks': 2,'Indoor Dome Cameras - 5 MP': 10,'Outdoor Fixed Cameras - 5 MP': 11,'Panoramic Camera - 180° - 20 MP': 1,'Panoramic Cameras - 360° - 20 MP': 2,'ANPR Cameras': 2,'Speed Guns': 2,'Face recognition Cameras': 2,'IP Horn Speakers': 5,'IP Ceiling Speakers': 5,'Face recognition Readers': 4,'Smart Card Reader': 1,'QR Code Readers': 4,'Camera Poles': 4,'Rack (12U)': 1,'10 finger enrolment reader': 1,'Indoor signages': 6},
    
    'Jokatte Gate': {'Automatic Tyre Killer': 1,'Manual Tyre Killer': 1,'Under Vehicle Surveillance Systems (UVSS)': 2,'Bollards': 8,'Boom Barriers': 4,'Swing Barriers': 3,'Visitor Kiosk': 1,'32" Overhead Displays': 2,'Indoor Digital Displays': 2,'Outdoor Digital Displays': 3,'Door Frame Metal Detectors (DFMD)': 2,'Baggage Scanners': 2,'Frisking Booth': 1,'Long Range RFID Readers': 4,'Push Button for Boom Barriers': 4,'Electro Magnetic Locks': 2,'Indoor Dome Cameras- 5 MP': 23,'Outdoor Fixed Cameras- 5 MP': 14,'PTZ with IR - 2MP': 2,'Panoramic Cameras- 180° - 20 MP': 2,'Panoramic Cameras- 360° - 20 MP': 3,'ANPR Cameras': 4,'Speed Guns': 4,'Face recognition Cameras': 4,'IP Horn Speakers': 9,'IP Ceiling Speakers': 2,'Face recognition Readers': 6,'QR Code Readers': 6,'Camera Poles': 2,'Rack (12U)': 1,'Outdoor Junction Boxes': 17,'10 finger enrolment reader': 1,'Indoor signages': 10,'Wireless Access Point': 1,'Portable face reader (buses)': 1,'Portable face reader (gates)': 1},
    
    'E2 Gate': {'Boom Barrier': 2,'Swing Barriers': 2,'32" Overhead Displays': 2,'Indoor Digital Display': 1,'Door Frame Metal Detector (DFMD)': 2,'Baggage Scanner': 2,'Frisking Booth': 1,'Long Range RFID Reader': 2,'Push Button for Boom Barrier': 2,'Electro Magnetic Lock': 1,'Indoor Dome Cameras- 5 MP': 4,'Outdoor Fixed Cameras- 5 MP': 2,'PTZ with IR - 2MP': 4,'Panoramic Cameras- 180° - 20 MP': 1,'Panoramic Cameras- 360° - 20 MP': 2,'ANPR Cameras': 2,'Speed Guns': 4,'Face recognition Cameras': 3,'IP Horn Speaker': 1,'IP Ceiling Speaker': 1,'Face recognition Readers': 4,'QR Code Readers': 4,'Camera Poles': 2,'Rack (12U)': 1,'Outdoor Junction Boxes': 14,'Indoor signages': 2},
    
    'Cargo Gate': {'Under Vehicle Surveillance Systems (UVSS)': 2,'Bollards': 8,'Boom Barriers': 4,'Swing Barriers': 4,'Visitor Kiosks': 2,'32" Overhead Displays': 3,'Indoor Digital Displays': 4,'Outdoor Digital Displays': 3,'Video Wall (6 x 3)': 1,'Long Range RFID Readers': 6,'Push Button for Boom Barriers': 3,'Indoor Dome Cameras- 5 MP': 16,'Outdoor Fixed Cameras- 5 MP': 6,'PTZ with IR - 2MP': 2,'ANPR Cameras': 4,'Speed Guns': 4,'Face recognition Cameras': 4,'IP Horn Speakers': 5,'IP Ceiling Speakers': 2,'Camera Poles': 3,'Rack (12U)': 1},
    
    'Railway Sliding': {'Under Vehicle Surveillance Systems (UVSS)': 2,'Boom Barriers': 2,'Gate': 1,'PTZ with IR - 2MP': 2,'Panoramic Cameras- 180° - 20 MP': 2,'Panoramic Camera- 360° - 20 MP': 1,'ANPR Cameras': 2,'Speed Guns': 2,'Indoor Dome Cameras- 5 MP': 2,'Outdoor Fixed Cameras- 5 MP': 6,'IP Horn Speakers': 3,'IP Ceiling Speaker': 1,'Rack (12U)': 1,'Outdoor Junction Boxes': 6,'Wireless Access Point': 1},
    
    'PCR': {'Swing Barriers': 1,'32" Overhead Display': 1,'Video Wall (2 x 3)': 1,'Gate': 1,'Panoramic Cameras- 180° - 20 MP': 2,'Panoramic Camera- 360° - 20 MP': 1,'Indoor Dome Cameras- 5 MP': 2,'Outdoor Fixed Cameras- 5 MP': 2,'Face recognition Cameras': 2,'IP Horn Speakers': 2,'IP Ceiling Speakers': 2,'Master & Local Control Desks': 1,'Face recognition Reader': 1,'QR Code Reader': 1},
    
    'CISF Checking': {'Under Vehicle Surveillance System (UVSS)': 1,'Boom Barrier': 1,'Push Button for Boom Barrier': 1,'Video Wall (2 x 3)': 1,'Panoramic Cameras- 180° - 20 MP': 2,'Panoramic Camera- 360° - 20 MP': 1,'ANPR Cameras': 2,'Speed Guns': 2,'Face recognition Cameras': 2}
};

const deviceGateLocations = {
    'Gates': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate','Railway Sliding','PCR'],
    'Automatic Tyre Killers': ['Main Gate', 'LP Gate', 'Jokatte Gate'],
    'Manual Tyre Killers': ['Main Gate', 'LP Gate', 'Jokatte Gate'],
    'Under Vehicle Surveillance Systems (UVSS)': ['Main Gate', 'LP Gate', 'Cargo Gate', 'Jokatte Gate', 'Railway Sliding', 'CISF Checking (Jokatte Gate)'],
    'Bollards': ['Main Gate','LP Gate','Jokatte Gate'],
    'Boom Barriers': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'CISF Checking (Jokatte Gate)'],
    'Swing Barriers': ['Main Gate: VIP Pedestrian','Main Gate: Blue Collar Pedestrian' ,'LP Gate: Pedestrian', 'Jokatte Gate: VIP Pedestrian', 'Jokatte Gate: Blue Collar Pedestrian','E2 Gate: Pedestrian', 'PCR: Pedestrian'],
    'Visitor Kiosks': ['Main Gate', 'LP Gate', 'Jokatte Gate'],
    '32" Overhead Displays':  ['Main Gate: VIP Pedestrian','Main Gate: Blue Collar Pedestrian' ,'LP Gate: Pedestrian', 'Jokatte Gate: VIP Pedestrian', 'Jokatte Gate: Blue Collar Pedestrian','E2 Gate: Pedestrian', 'PCR: Pedestrian'],
    'Indoor Digital Displays': ['Main Gate', 'LP Gate', 'Cargo Gate'],
    'Outdoor Digital Displays': ['Main Gate: Entry','Main Gate: Workshop Junction', 'LP Gate: Entry','LP Gate: Exit','Cargo Gate: Vehicle Parking Area','Cargo Gate: Betaland', 'Jokatte Gate: Entry','Jokatte Gate: Parking Area (CL Area)','Jokatte Gate: Parking Area (Near Plant Gate)'],
    'Video Wall (6 x 3)': ['Main Gate: Command Centre'],
    'Video Wall (2 x 3)': ['PCR: (Plant Gate)'],
    'Door Frame Metal Detectors (DFMD)': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate'],
    'Baggage Scanners': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate'],
    // 'Frisking Booth': ['Main Gate', 'Cargo Gate', 'CISF Checking'],
    'Long Range RFID Readers': ['Main Gate: Canopy', 'LP Gate: Canopy', 'Jokatte Gate: Canopy', 'E2 Gate: Canopy', 'Cargo Gate: Canopy'],
    'Push Button for Boom Barriers': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'CISF Checking (Jokatte Gate)'],
    'Electro Magnetic Locks': ['Main Gate', 'LP Gate', 'Jokatte Gate'],
    'Indoor Dome Cameras- 5 MP': ['Main Gate: Canopy','Main Gate: Parking & Roads','Main Gate: GF','Main Gate: 1F', 'LP Gate: Pedestrian', 'Jokatte Gate: Canopy','Jokatte Gate: Parking & Roads','Jokatte Gate: GF', 'E2 Gate: Pedestrian', 'Cargo Gate: Canopy'],
    'Outdoor Fixed Cameras- 5 MP': ['Main Gate: Canopy','Main Gate: Parking & Roads','Main Gate: GF', 'LP Gate: Canopy','LP Gate: Pedestrian', 'Jokatte Gate: Canopy','Jokatte Gate: Parking & Roads','Jokatte Gate: GF', 'E2 Gate: Pedestrian', 'Cargo Gate: Canopy', 'Railway Sliding'],
    'PTZ with IR - 2MP': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'Cargo Gate','Railway Sliding'],
    'Panoramic Cameras- 180° - 20 MP': ['Main Gate: Security Check Building','Main Gate: Canopy' ,'LP Gate: Security Check Building','LP Gate: Canopy', 'Jokatte Gate: Security Check Building','Jokatte Gate: Canopy' ,'E2 Gate: Security Check Building','E2 Gate: Canopy','Cargo Gate: Security Check Building', 'Cargo Gate: Canopy','Railway Sliding: Security Check Building', 'Railway Sliding: Canopy','PCR: Security Check Building','PCR: Canopy', 'CISF Checking (Jokatte Gate): Security Check Building', 'CISF Checking (Jokatte Gate): Canopy'],
    'Panoramic Cameras- 360° - 20 MP': ['Main Gate: Parking', 'LP Gate: Parking', 'Jokatte Gate: Parking', 'E2 Gate: Parking', 'Cargo Gate: Parking','Railway Sliding: Parking','PCR: Parking','CISF Checking (Jokatte Gate): Parking'],
    'ANPR Cameras': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'CISF Checking (Jokatte Gate)'],
    'Face recognition Cameras': ['Main Gate: Security Check Building','Main Gate: Canopy','LP Gate: Security Check Building' ,'LP Gate: Canopy', 'Jokatte Gate: Security Check Building','Jokatte Gate: Canopy', 'Cargo Gate: Security Check Building', 'Cargo Gate: Canopy'],
    'IP Horn Speakers': ['Main Gate: Security Check Building','Main Gate: Canopy','Main Gate: Parking' ,'LP Gate: Security Check Building','LP Gate: Canopy','LP Gate: Parking', 'Jokatte Gate: Security Check Building','Jokatte Gate: Canopy', 'Jokatte Gate: Parking','E2 Gate: Security Check Building','E2 Gate: Canopy','E2 Gate: Parking', 'Cargo Gate: Security Check Building','Cargo Gate: Canopy','Cargo Gate: Parking','Railway Sliding: Security Check Building','Railway Sliding: Canopy','Railway Sliding: Parking'],
    'IP Ceiling Speakers': ['Main Gate: Security Check Building','Main Gate: Command Centre Building','LP Gate: Security Check Building','Jokatte Gate: Security Check Building','E2 Gate: Security Check Building', 'Cargo Gate: Security Check Building','Railway Sliding: Security Check Building'],
    'Master & Local Control Desks': ['Main Gate: Command Centre Building'],
    'Face recognition Readers':  ['Main Gate: VIP Pedestrian','Main Gate: Blue Collar Pedestrian' ,'LP Gate: Pedestrian', 'Jokatte Gate: VIP Pedestrian', 'Jokatte Gate: Blue Collar Pedestrian','E2 Gate: Pedestrian', 'PCR: Pedestrian'],
    // 'Smart Card Reader': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate'],
    'QR Code Readers':  ['Main Gate: VIP Pedestrian','Main Gate: Blue Collar Pedestrian' ,'LP Gate: Pedestrian', 'Jokatte Gate: VIP Pedestrian', 'Jokatte Gate: Blue Collar Pedestrian','E2 Gate: Pedestrian', 'PCR: Pedestrian'],
    // 'Camera Poles': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'Railway Sliding'],
    'Racks (12U)': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'Railway Sliding'],
    'Outdoor Junction Boxes': ['Main Gate', 'Jokatte Gate', 'E2 Gate', 'Railway Sliding'],
    'Portable face readers (buses)': ['Main Gate','LP Gate','Jokatte Gate'],
    'Portable face readers (gates)': ['Main Gate','LP Gate','Jokatte Gate'],
    '10 finger enrolment readers':['Main Gate','LP Gate','Jokatte Gate'],
    'Speed Track Displays':[],
    // 'Indoor signages': ['Main Gate', 'Jokatte Gate', 'E2 Gate', 'Railway Sliding'],
    'Wireless Access Points': ['Jokatte Gate','Railway Sliding'],
    'Video Conferencing Solutions': ['Main Gate: Security Check Building','Main Gate: Command Centre Building'],
    'Switches': ['Main Gate'],
    'Speed Guns': ['Main Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate', 'Cargo Gate', 'CISF Checking (Jokatte Gate)'],
    // 'Diesel Generator Set': ['Main Gate', 'Cargo Gate']
};

// Populate Gate Operations Table with live data
function populateGateOperationsTable() {
    const tbody = document.getElementById('gateOperationsTable');
    if (!tbody) {
        console.error(' gateOperationsTable not found');
        return;
    }
    
    console.log('✅ Populating gate operations table...');
    tbody.innerHTML = '';
    
    // Define gates to display (excluding PCR, Railway Sliding, CISF Checking)
    const gatesToShow = ['Main Gate', 'Cargo Gate', 'LP Gate', 'Jokatte Gate', 'E2 Gate'];
    
    gatesToShow.forEach(gateName => {
        const devices = gateDeviceDistribution[gateName];
        if (!devices) return;
        
        // Generate realistic entry/exit data based on gate size
        const totalDevices = Object.values(devices).reduce((sum, count) => sum + count, 0);
        
        // Base entries on gate importance and device count
        let baseEntries = 0;
        if (gateName === 'Main Gate') baseEntries = 1200 + Math.floor(Math.random() * 100);
        else if (gateName === 'LP Gate') baseEntries = 800 + Math.floor(Math.random() * 100);
        else if (gateName === 'Jokatte Gate') baseEntries = 600 + Math.floor(Math.random() * 100);
        else if (gateName === 'E2 Gate') baseEntries = 400 + Math.floor(Math.random() * 100);
        else if (gateName === 'Cargo Gate') baseEntries = 250 + Math.floor(Math.random() * 50);
        
        const entries = baseEntries;
        const exits = entries - Math.floor(Math.random() * 20) - 10; // Slightly fewer exits
        const inside = entries - exits;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-weight: 600; color: #00d4ff;">${gateName}</td>
            <td><span class="status-badge good">ACTIVE</span></td>
            <td>${entries.toLocaleString()}</td>
            <td>${exits.toLocaleString()}</td>
            <td style="color: #00ff88; font-weight: bold;">${inside}</td>
        `;
        tbody.appendChild(row);
    });
    
    console.log('✅ Gate operations table populated');
}

function populateGateHealthTable() {
    const container = document.getElementById('gateCardsContainer');
    if (!container) {
        console.error(' gateCardsContainer not found');
        return;
    }
    
    console.log('✅ Populating gate health cards...');
    container.innerHTML = '';
    
    Object.entries(MRPL_DEVICE_DATA.gates).forEach(([gateName, data]) => {
        const devices = gateDeviceDistribution[gateName] || {};
        
        // Count total devices at this gate
        const totalDevices = Object.values(devices).reduce((sum, count) => sum + count, 0);
        
        // Count device types
        const deviceTypeCount = Object.keys(devices).length;
        
        // Status badge with symbol
        const statusClass = data.status === 'ONLINE' ? 'good' : 'warning';
        const statusSymbol = data.status === 'ONLINE' ? '✅' : '';
        
        const card = document.createElement('div');
        card.className = 'gate-card';
        card.onclick = () => showGateDetailsModal(gateName);
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.8rem;">
                <h4 style="color: #00d4ff; font-size: 1.1rem; margin: 0;">${gateName}</h4>
                <span class="status-badge ${statusClass}" style="font-size: 0.9rem;">${statusSymbol}</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.8rem;">
                <div style="background: rgba(0, 212, 255, 0.1); padding: 0.5rem; border-radius: 6px;">
                    <div style="font-size: 0.75rem; color: #8b9dc3;">Total Devices</div>
                    <div style="font-size: 1.3rem; color: #00ff88; font-weight: bold;">${totalDevices}</div>
                </div>
                <div style="background: rgba(0, 255, 136, 0.1); padding: 0.5rem; border-radius: 6px;">
                    <div style="font-size: 0.75rem; color: #8b9dc3;">Device Types</div>
                    <div style="font-size: 1.3rem; color: #00d4ff; font-weight: bold;">${deviceTypeCount}</div>
                </div>
            </div>
            <div style="text-align: center; color: #8b9dc3; font-size: 0.85rem; padding: 0.5rem; background: rgba(0, 212, 255, 0.05); border-radius: 6px; cursor: pointer;">
                 Click to view details
            </div>
        `;
        
        container.appendChild(card);
    });
    
    console.log('✅ Gate health cards populated with', container.children.length, 'cards');
}

// Show gate details modal with operational status and device list
function showGateDetailsModal(gateName) {
    currentSelectedGate = gateName;
    
    const modal = document.getElementById('gatePieModal');
    const modalTitle = document.getElementById('gatePieModalTitle');
    
    modalTitle.textContent = gateName + ' - Operational Status';
    modal.style.display = 'block';
    
    // Get devices for this gate
    const devices = gateDeviceDistribution[gateName] || {};
    const deviceList = Object.entries(devices)
        .filter(([device, count]) => count >= 1)
        .sort((a, b) => b[1] - a[1]);
    
    const totalDevices = deviceList.reduce((sum, [_, count]) => sum + count, 0);
    
    // Simulate operational status (85% online, 10% maintenance, 5% offline)
    // In production, this would come from real-time monitoring system
    const onlineCount = Math.round(totalDevices * 0.85);
    const maintenanceCount = Math.round(totalDevices * 0.10);
    const offlineCount = totalDevices - onlineCount - maintenanceCount;
    
    const operationalStatus = {
        'Online': onlineCount,
        'Under Maintenance': maintenanceCount,
        'Offline': offlineCount
    };
    
    // Distribute devices across statuses (for demo purposes)
    const onlineDevices = [];
    const maintenanceDevices = [];
    const offlineDevices = [];
    
    let remainingOnline = onlineCount;
    let remainingMaintenance = maintenanceCount;
    let remainingOffline = offlineCount;
    
    deviceList.forEach(([deviceName, count]) => {
        const onlineForThis = Math.min(Math.round(count * 0.85), remainingOnline);
        const maintenanceForThis = Math.min(Math.round(count * 0.10), remainingMaintenance);
        const offlineForThis = Math.min(count - onlineForThis - maintenanceForThis, remainingOffline);
        
        if (onlineForThis > 0) {
            onlineDevices.push(`${deviceName} (${onlineForThis})`);
            remainingOnline -= onlineForThis;
        }
        if (maintenanceForThis > 0) {
            maintenanceDevices.push(`${deviceName} (${maintenanceForThis})`);
            remainingMaintenance -= maintenanceForThis;
        }
        if (offlineForThis > 0) {
            offlineDevices.push(`${deviceName} (${offlineForThis})`);
            remainingOffline -= offlineForThis;
        }
    });
    
    // Create HTML layout
    let deviceListHTML = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">';
    
    // Left side - Summary and Operational Status Pie Chart
    deviceListHTML += '<div>';
    deviceListHTML += '<div style="margin-bottom: 1rem; padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 8px; text-align: center;">';
    deviceListHTML += `<div style="font-size: 0.9rem; color: #8b9dc3; margin-bottom: 0.3rem;">Total Devices</div>`;
    deviceListHTML += `<div style="font-size: 2rem; color: #00ff88; font-weight: bold;">${totalDevices}</div>`;
    deviceListHTML += `<div style="font-size: 0.85rem; color: #8b9dc3;">${deviceList.length} device types</div>`;
    deviceListHTML += '</div>';
    
    deviceListHTML += '<div style="background: rgba(30, 39, 70, 0.5); padding: 1rem; border-radius: 8px;">';
    deviceListHTML += '<div style="text-align: center; color: #00d4ff; font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: 600;">Operational Status</div>';
    deviceListHTML += '<canvas id="gateOperationalPieChart" style="max-height: 220px; cursor: pointer;"></canvas>';
    deviceListHTML += '<div style="margin-top: 0.5rem; font-size: 0.75rem; color: #8b9dc3; text-align: center;">Click on chart segments for details</div>';
    deviceListHTML += '</div>';
    deviceListHTML += '</div>';
    
    // Right side - Complete Device List Table (always visible)
    deviceListHTML += '<div style="max-height: 400px; overflow-y: auto; position: relative;">';
    deviceListHTML += '<table style="width: 100%; border-collapse: collapse;">';
    deviceListHTML += '<thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><tr><th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Device Type</th><th style="text-align: center; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; width: 80px; background: #1e2746;">Count</th></tr></thead>';
    deviceListHTML += '<tbody>';
    
    deviceList.forEach(([deviceName, count], index) => {
        const bgColor = index % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
        deviceListHTML += `
            <tr style="border-bottom: 1px solid #3d4a7a; background: ${bgColor};">
                <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.85rem;">${deviceName}</td>
                <td style="padding: 0.7rem; text-align: center; color: #00ff88; font-weight: bold; font-size: 1rem;">${count}</td>
            </tr>
        `;
    });
    
    deviceListHTML += '</tbody></table></div>';
    deviceListHTML += '</div>';
    
    // Replace modal content
    const chartContainer = document.getElementById('gateDevicePieChart');
    if (chartContainer) {
        chartContainer.style.display = 'none';
    }
    
    let listContainer = document.getElementById('gateDeviceListContainer');
    if (!listContainer) {
        listContainer = document.createElement('div');
        listContainer.id = 'gateDeviceListContainer';
        if (chartContainer && chartContainer.parentElement) {
            chartContainer.parentElement.insertBefore(listContainer, chartContainer);
        }
    }
    listContainer.innerHTML = deviceListHTML;
    
    // Store device lists for click handling
    window.gateStatusData = {
        'Online': onlineDevices,
        'Under Maintenance': maintenanceDevices,
        'Offline': offlineDevices
    };
    
    // Create operational status pie chart
    setTimeout(() => createGateOperationalPieChart(operationalStatus), 100);
}

// Create operational status pie chart with click handling
function createGateOperationalPieChart(statusData) {
    const ctx = document.getElementById('gateOperationalPieChart');
    if (!ctx) return;
    
    if (window.gateOperationalChartInstance) {
        window.gateOperationalChartInstance.destroy();
    }
    
    const labels = Object.keys(statusData);
    const data = Object.values(statusData);
    
    const colors = {
        'Online': '#00ff88',
        'Under Maintenance': '#ffd700',
        'Offline': '#ff3366'
    };
    
    const backgroundColors = labels.map(label => colors[label]);
    
    window.gateOperationalChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderColor: '#1a1f3a',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0',
                        font: { size: 11 },
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': ' + value + ' devices (' + percentage + '%)';
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const status = labels[index];
                    showStatusDeviceList(status);
                }
            }
        }
    });
}

// Show device list for clicked status in a popup
function showStatusDeviceList(status) {
    if (!window.gateStatusData) return;
    
    const devices = window.gateStatusData[status] || [];
    
    const statusColors = {
        'Online': '#00ff88',
        'Under Maintenance': '#ffd700',
        'Offline': '#ff3366'
    };
    
    const statusIcons = {
        'Online': '✅',
        'Under Maintenance': '🔧',
        'Offline': '❌'
    };
    
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'statusPopupOverlay';
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: flex; align-items: center; justify-content: center;';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = 'background: linear-gradient(135deg, #1e2749 0%, #2d3561 100%); border-radius: 12px; padding: 2rem; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto; border: 2px solid #3d4a7a; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);';
    
    let html = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">';
    html += `<div style="display: flex; align-items: center; gap: 0.7rem;">`;
    html += `<span style="font-size: 2rem;">${statusIcons[status]}</span>`;
    html += `<div>`;
    html += `<div style="color: ${statusColors[status]}; font-size: 1.3rem; font-weight: 600;">${status} Devices</div>`;
    html += `<div style="color: #8b9dc3; font-size: 0.85rem; margin-top: 0.2rem;">${devices.length} device types</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `<button onclick="closeStatusPopup()" style="background: transparent; border: none; color: #8b9dc3; font-size: 2rem; cursor: pointer; line-height: 1; padding: 0; width: 40px; height: 40px; border-radius: 50%; transition: all 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#8b9dc3';">&times;</button>`;
    html += '</div>';
    
    if (devices.length === 0) {
        html += '<div style="text-align: center; padding: 3rem; color: #8b9dc3;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>';
        html += '<div>No devices in this status</div>';
        html += '</div>';
    } else {
        html += '<div style="background: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 0.5rem;">';
        devices.forEach((device, index) => {
            const bgColor = index % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            html += `<div style="padding: 0.8rem; border-bottom: ${index < devices.length - 1 ? '1px solid #3d4a7a' : 'none'}; background: ${bgColor}; color: #e0e0e0; font-size: 0.95rem; border-radius: 4px;">${device}</div>`;
        });
        html += '</div>';
    }
    
    popup.innerHTML = html;
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeStatusPopup();
        }
    });
}

// Close status popup
function closeStatusPopup() {
    const overlay = document.getElementById('statusPopupOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// Keep the old function name for compatibility
function showGatePieChart(gateName) {
    showGateDetailsModal(gateName);
}

// Close gate pie modal
function closeGatePieModal() {
    const modal = document.getElementById('gatePieModal');
    modal.style.display = 'none';
    
    // Destroy chart
    if (gateDevicePieChart) {
        gateDevicePieChart.destroy();
        gateDevicePieChart = null;
    }
}

function createGatePieChart(gateName) {
    const ctx = document.getElementById('gateDevicePieChart');
    if (!ctx) return;
    
    // Destroy existing chart
    if (gateDevicePieChart) {
        gateDevicePieChart.destroy();
    }
    
    const devices = gateDeviceDistribution[gateName] || {};
    
    // Filter out devices with 0 quantity - only show devices present at this gate
    const filteredDevices = {};
    Object.entries(devices).forEach(([deviceName, quantity]) => {
        if (quantity >= 1) {
            filteredDevices[deviceName] = quantity;
        }
    });
    
    const labels = Object.keys(filteredDevices);
    const data = Object.values(filteredDevices);
    
    const colors = [
        '#00d4ff', '#00ff88', '#ff3366', '#ffd700', '#9b59b6',
        '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#1abc9c',
        '#e67e22', '#95a5a6', '#34495e', '#16a085', '#c0392b',
        '#8e44ad', '#27ae60', '#d35400', '#2980b9', '#c0392b',
        '#16a085', '#f39c12', '#d35400', '#c0392b', '#8e44ad',
        '#2980b9', '#27ae60', '#e74c3c', '#3498db', '#9b59b6',
        '#1abc9c', '#f1c40f', '#e67e22', '#95a5a6', '#34495e'
    ];
    
    gateDevicePieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#1a1f3a',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#e0e0e0',
                        font: {
                            size: 11
                        },
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': ' + value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

function downloadSingleGateReport() {
    if (currentSelectedGate === 'all') return;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(26, 31, 58);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(20);
    doc.text('MRPL ISCC Dashboard', 105, 15, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(currentSelectedGate + ' - Device Report', 105, 25, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(139, 157, 195);
    doc.text('Generated: ' + new Date().toLocaleString(), 105, 32, { align: 'center' });
    
    // Gate info
    const gateInfo = MRPL_DEVICE_DATA.gates[currentSelectedGate];
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text('Gate Status: ' + gateInfo.status, 20, 50);
    doc.text('Cameras: ' + gateInfo.cameras, 20, 58);
    doc.text('ANPR Systems: ' + gateInfo.anpr, 20, 66);
    doc.text('Bollards: ' + gateInfo.bollards, 20, 74);
    
    // Device distribution table - only include devices with quantity >= 1
    const devices = gateDeviceDistribution[currentSelectedGate] || {};
    const tableData = Object.entries(devices)
        .filter(([device, count]) => count >= 1)  // Only include devices present at this gate
        .map(([device, count]) => [device, count]);
    
    doc.autoTable({
        startY: 85,
        head: [['Device Type', 'Count']],
        body: tableData,
        theme: 'grid',
        headStyles: {
            fillColor: [0, 212, 255],
            textColor: [10, 14, 39],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 10,
            cellPadding: 5
        }
    });
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(139, 157, 195);
        doc.text('MRPL ISCC - Confidential', 105, 285, { align: 'center' });
        doc.text('Page ' + i + ' of ' + pageCount, 105, 290, { align: 'center' });
    }
    
    doc.save(currentSelectedGate.replace(/ /g, '_') + '_Device_Report.pdf');
}

function downloadAllGatesReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(26, 31, 58);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(20);
    doc.text('MRPL ISCC Dashboard', 105, 15, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('All Gates - Comprehensive Device Report', 105, 25, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(139, 157, 195);
    doc.text('Generated: ' + new Date().toLocaleString(), 105, 32, { align: 'center' });
    
    // Summary statistics
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text('Overall Statistics', 20, 50);
    doc.setFontSize(10);
    doc.text('Total Cameras: ' + MRPL_DEVICE_DATA.totalCameras, 20, 58);
    doc.text('Online Cameras: ' + MRPL_DEVICE_DATA.onlineCameras, 20, 64);
    doc.text('Offline Cameras: ' + MRPL_DEVICE_DATA.offlineCameras, 20, 70);
    doc.text('Total Gates: ' + Object.keys(MRPL_DEVICE_DATA.gates).length, 20, 76);
    
    // Gate-wise summary table
    const gateTableData = Object.entries(MRPL_DEVICE_DATA.gates).map(([gateName, data]) => [
        gateName,
        data.cameras,
        data.anpr,
        data.bollards,
        data.status
    ]);
    
    doc.autoTable({
        startY: 85,
        head: [['Gate Name', 'Cameras', 'ANPR', 'Bollards', 'Status']],
        body: gateTableData,
        theme: 'grid',
        headStyles: {
            fillColor: [0, 212, 255],
            textColor: [10, 14, 39],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 9,
            cellPadding: 4
        }
    });
    
    // Add detailed breakdown for each gate on new pages
    Object.keys(gateDeviceDistribution).forEach((gateName, index) => {
        doc.addPage();
        
        // Gate header
        doc.setFillColor(0, 212, 255);
        doc.rect(0, 0, 210, 25, 'F');
        doc.setTextColor(10, 14, 39);
        doc.setFontSize(16);
        doc.text(gateName + ' - Detailed Breakdown', 105, 15, { align: 'center' });
        
        // Gate info
        const gateInfo = MRPL_DEVICE_DATA.gates[gateName];
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text('Status: ' + gateInfo.status, 20, 35);
        doc.text('Cameras: ' + gateInfo.cameras, 20, 42);
        doc.text('ANPR: ' + gateInfo.anpr, 80, 42);
        doc.text('Bollards: ' + gateInfo.bollards, 130, 42);
        
        // Device distribution - only include devices with quantity >= 1
        const devices = gateDeviceDistribution[gateName] || {};
        const tableData = Object.entries(devices)
            .filter(([device, count]) => count >= 1)  // Only include devices present at this gate
            .map(([device, count]) => [device, count]);
        
        doc.autoTable({
            startY: 50,
            head: [['Device Type', 'Count']],
            body: tableData,
            theme: 'striped',
            headStyles: {
                fillColor: [0, 212, 255],
                textColor: [10, 14, 39],
                fontStyle: 'bold'
            },
            styles: {
                fontSize: 10,
                cellPadding: 5
            }
        });
    });
    
    // Footer on all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(139, 157, 195);
        doc.text('MRPL ISCC - Confidential', 105, 285, { align: 'center' });
        doc.text('Page ' + i + ' of ' + pageCount, 105, 290, { align: 'center' });
    }
    
    doc.save('MRPL_All_Gates_Device_Report.pdf');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const gatePieModal = document.getElementById('gatePieModal');
    if (event.target == gatePieModal) {
        closeGatePieModal();
    }
}



function showKPIDetails(type) {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    let title = '';
    let content = '';
    
    if (type === 'vehicleEntries') {
        title = 'Vehicle Entries Today - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto; position: relative;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Recent vehicle entries tracked by ANPR system</p>
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Time</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Vehicle Number</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Type</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Status</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Data Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:35</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-20-MN-5678</td><td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Car</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:32</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-19-AB-1234</td><td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Truck</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:28</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-20-XY-9876</td><td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Car</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:25</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-18-CD-4567</td><td style="padding: 0.7rem; color: #e0e0e0;">Jokatte Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Bike</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:20</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-21-PQ-7890</td><td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Car</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:15</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-19-RS-2345</td><td style="padding: 0.7rem; color: #e0e0e0;">E2 Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Van</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:10</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-20-TU-6789</td><td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Car</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:05</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-18-VW-3456</td><td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Truck</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:00</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-21-YZ-8901</td><td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Car</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:55</td><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">KA-19-EF-4567</td><td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Bike</td><td style="padding: 0.7rem; text-align: center;"><span class="status-badge good">Entered</span></td><td style="padding: 0.7rem; color: #00d4ff;">ANPR Camera</td></tr>
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background: rgba(0, 212, 255, 0.1); border-radius: 8px; color: #00d4ff;">
                    <strong>Total Entries Today:</strong> 1,250 vehicles across all gates
                </div>
            </div>
        `;
    } else if (type === 'personnelInside') {
        title = 'Personnel Inside Refinery - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto; position: relative;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Personnel currently inside tracked by Face Recognition</p>
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Employee ID</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Name</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Department</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Entry Time</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Entry Gate</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Data Source</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Attachment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-2456</td><td style="padding: 0.7rem; color: #e0e0e0;">Rajesh Kumar</td><td style="padding: 0.7rem; color: #e0e0e0;">Operations</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:15</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Reader</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-3789</td><td style="padding: 0.7rem; color: #e0e0e0;">Priya Sharma</td><td style="padding: 0.7rem; color: #e0e0e0;">Safety</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:20</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Camera</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-1234</td><td style="padding: 0.7rem; color: #e0e0e0;">Amit Patel</td><td style="padding: 0.7rem; color: #e0e0e0;">Maintenance</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:25</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">LP Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Reader</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-5678</td><td style="padding: 0.7rem; color: #e0e0e0;">Sunita Reddy</td><td style="padding: 0.7rem; color: #e0e0e0;">Admin</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:30</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Camera</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-9012</td><td style="padding: 0.7rem; color: #e0e0e0;">Vikram Singh</td><td style="padding: 0.7rem; color: #e0e0e0;">Security</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:35</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">E2 Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Reader</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">CON-4567</td><td style="padding: 0.7rem; color: #e0e0e0;">Ramesh Yadav</td><td style="padding: 0.7rem; color: #e0e0e0;">Contractor</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:00</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Cargo Gate</td><td style="padding: 0.7rem; color: #00d4ff;">ACS + FR</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">CON-7890</td><td style="padding: 0.7rem; color: #e0e0e0;">Suresh Naik</td><td style="padding: 0.7rem; color: #e0e0e0;">Contractor</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:05</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Cargo Gate</td><td style="padding: 0.7rem; color: #00d4ff;">ACS + FR</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-2345</td><td style="padding: 0.7rem; color: #e0e0e0;">Kavita Desai</td><td style="padding: 0.7rem; color: #e0e0e0;">HR</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:10</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Reader</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">EMP-6789</td><td style="padding: 0.7rem; color: #e0e0e0;">Anil Mehta</td><td style="padding: 0.7rem; color: #e0e0e0;">Engineering</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:15</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Jokatte Gate</td><td style="padding: 0.7rem; color: #00d4ff;">FR Camera</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;"><td style="padding: 0.7rem; color: #ff3366; font-weight: 600;">VIS-1234</td><td style="padding: 0.7rem; color: #e0e0e0;">John Smith</td><td style="padding: 0.7rem; color: #e0e0e0;">Visitor</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:30</td><td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">Main Gate</td><td style="padding: 0.7rem; color: #00d4ff;">ACS + FR</td><td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td></tr>
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background: rgba(0, 212, 255, 0.1); border-radius: 8px; color: #00d4ff;">
                    <strong>Total Personnel Inside:</strong> 2,840 (Employees: 2,145 | Contractors: 580 | Visitors: 115)
                </div>
            </div>
        `;
    } else if (type === 'accessGranted') {
        title = 'Access Granted Today - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Successful access attempts across all gates</p>
                
                <!-- Shift Tabs and Category Buttons -->
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;">
                        <button class="shift-tab-btn active" onclick="showShiftData('shiftA')" id="shiftABtn" style="flex: 1; min-width: 120px; padding: 0.7rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            Shift A
                        </button>
                        <button class="shift-tab-btn" onclick="showShiftData('shiftB')" id="shiftBBtn" style="flex: 1; min-width: 120px; padding: 0.7rem; background: rgba(102, 126, 234, 0.3); color: #8b9dc3; border: 2px solid #667eea; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            Shift B
                        </button>
                        <button class="shift-tab-btn" onclick="showShiftData('shiftC')" id="shiftCBtn" style="flex: 1; min-width: 120px; padding: 0.7rem; background: rgba(102, 126, 234, 0.3); color: #8b9dc3; border: 2px solid #667eea; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            Shift C
                        </button>
                        <button class="shift-tab-btn" onclick="showShiftData('general')" id="generalBtn" style="flex: 1; min-width: 120px; padding: 0.7rem; background: rgba(102, 126, 234, 0.3); color: #8b9dc3; border: 2px solid #667eea; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            General Shift
                        </button>
                    </div>
                    
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button onclick="showCategoryData('contractors')" style="flex: 1; min-width: 150px; padding: 0.7rem; background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%); color: #0a0e27; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            Contractors
                        </button>
                        <button onclick="showCategoryData('visitors')" style="flex: 1; min-width: 150px; padding: 0.7rem; background: linear-gradient(135deg, #ffaa00 0%, #ff3366 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                            Visitors
                        </button>
                    </div>
                </div>
                
                <!-- Shift Data Container -->
                <div id="shiftDataContainer">
                    <!-- Will be populated by showShiftData() -->
                </div>
            </div>
        `;
        
        // After rendering, show default shift data
        setTimeout(() => showShiftData('shiftA'), 100);
    } else if (type === 'accessDenied') {
        title = '⛔ Access Denied - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto; position: relative;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Unauthorized access attempts requiring attention</p>
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Time</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Person/Vehicle</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Reason</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Action</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Data Source</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Attachment</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:15</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">KA-XX-XXXX</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Blacklisted Vehicle</td>
                            <td style="padding: 0.7rem; text-align: center;"><span class="status-badge critical">Denied</span></td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ANPR + ACS</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:45</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">EMP-9999</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Expired Access Card</td>
                            <td style="padding: 0.7rem; text-align: center;"><span class="status-badge warning">Pending</span></td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ACS + FR Reader</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:20</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Unknown Vehicle</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">E2 Gate</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">RFID Tag Expired</td>
                            <td style="padding: 0.7rem; text-align: center;"><span class="status-badge critical">Denied</span></td>
                            <td style="padding: 0.7rem; color: #00d4ff;">RFID + ANPR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
   
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:45</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Unknown Person</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Tailgating Attempt</td>
                            <td style="padding: 0.7rem; text-align: center;"><span class="status-badge critical">Denied</span></td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR Camera + Barrier</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:20</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">EMP-7777</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Card Expired</td>
                            <td style="padding: 0.7rem; text-align: center;"><span class="status-badge warning">Verified</span></td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ACS + FR Reader</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background: rgba(255, 51, 102, 0.1); border-radius: 8px; color: #ff3366;">
                    <strong>Total Access Denied:</strong> 28 unauthorized attempts today
                </div>
            </div>
        `;
    } else if (type === 'specialEntries') {
        title = 'Special Entries - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto; position: relative;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Entries without passes - Phone call approvals and Emergency entries</p>
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="padding: 0.7rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Name</th>
                            <th style="padding: 0.7rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                            <th style="padding: 0.7rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Time</th>
                            <th style="padding: 0.7rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Reason</th>
                            <th style="padding: 0.7rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Validating Officer</th>
                            <th style="padding: 0.7rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Data Source</th>
                            <th style="padding: 0.7rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Attachment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Rajesh Kumar</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:30</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;" onclick="showImage('snapshot_ddmmyyyy.png')"><span style="font-weight: 800; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #00d4ff; padding-bottom: 2px;">View</span></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Priya Sharma</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:45</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Malfunction</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Amit Patel</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Jokatte Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">12:20</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Lost Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Sunita Reddy</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:50</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Vikram Singh</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:15</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Damaged</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Ramesh Yadav</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:40</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Kavita Desai</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:10</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Not Working</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Anil Mehta</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Jokatte Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:55</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Suresh Naik</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">E2 Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:30</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Lost Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Deepak Joshi</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:05</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Malfunction</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Meena Iyer</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:45</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Ravi Shankar</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:20</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Damaged</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Pooja Nair</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">08:00</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Forgot ID Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Sanjay Gupta</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Jokatte Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">07:40</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Lost Card</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Lakshmi Menon</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">07:15</td>
                            <td style="padding: 0.7rem; color: #ffaa00;">Phone Call Approval - Card Not Working</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">FR</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Emergency Response Team</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">15:20</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Entry - Fire Drill</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Override</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Medical Team</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">E2 Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:10</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Entry - Medical Emergency</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Override</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #e0e0e0;">Safety Inspector</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:25</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Entry - Safety Inspection</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">ABC</td>
                            <td style="padding: 0.7rem; color: #00d4ff;">Emergency Override</td>
                            <td style="padding: 0.7rem; text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background: rgba(255, 170, 0, 0.1); border-radius: 8px; color: #ffaa00;">
                    <strong>Total Special Entries:</strong> 18 (Phone Call Approvals: 15 | Emergency Entries: 3)
                </div>
            </div>
        `;
    }
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function showIncidentDetails(period) {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    let title = '';
    let incidents = [];
    
    if (period === 'today') {
        title = 'Incidents Today - Details';
        incidents = [
            { time: '14:35', type: 'Speed Violation', location: 'Main Gate Entry', status: 'Closed', severity: 'Low', sla: '30 min', resolution: '15 min', breach: false },
            { time: '13:20', type: 'Unauthorized Access', location: 'LP Gate', status: 'Open', severity: 'High', sla: '15 min', resolution: '35 min', breach: false },
            { time: '12:15', type: 'No Riding Helmet', location: 'Jokatte Gate', status: 'Closed', severity: 'Medium', sla: '20 min', resolution: '12 min', breach: false },
            { time: '11:45', type: 'Tailgating', location: 'Main Gate', status: 'Closed', severity: 'Medium', sla: '20 min', resolution: '18 min', breach: false },
            { time: '10:30', type: 'Speed Violation', location: 'Cargo Gate', status: 'Closed', severity: 'Low', sla: '30 min', resolution: '25 min', breach: false },
            { time: '09:50', type: 'No PPE Kit', location: 'E2 Gate', status: 'Open', severity: 'High', sla: '15 min', resolution: '28 min', breach: false },
            { time: '09:15', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', severity: 'Low', sla: '30 min', resolution: '22 min', breach: false },
            { time: '08:40', type: 'Expired Badge', location: 'LP Gate', status: 'Closed', severity: 'Medium', sla: '20 min', resolution: '35 min', breach: true },
            { time: '08:10', type: 'Speed Violation', location: 'Jokatte Gate', status: 'Open', severity: 'Low', sla: '30 min', resolution: '18 min', breach: false },
            { time: '07:55', type: 'Unauthorized Vehicle', location: 'Main Gate', status: 'Closed', severity: 'High', sla: '15 min', resolution: '22 min', breach: true },
            { time: '07:20', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', severity: 'Low', sla: '30 min', resolution: '16 min', breach: false },
            { time: '06:45', type: 'No Riding Helmet', location: 'LP Gate', status: 'Open', severity: 'Medium', sla: '20 min', resolution: '14 min', breach: false }
        ];
    } else if (period === 'week') {
        title = 'Incidents This Week - Summary';
        incidents = [
            { date: 'Today', total: 12, closed: 8, open: 4, critical: 2, breaches: 2 },
            { date: 'Yesterday', total: 15, closed: 13, open: 2, critical: 1, breaches: 1 },
            { date: 'Feb 22', total: 8, closed: 7, open: 1, critical: 0, breaches: 0 },
            { date: 'Feb 21', total: 6, closed: 5, open: 1, critical: 1, breaches: 1 },
            { date: 'Feb 20', total: 4, closed: 3, open: 1, critical: 0, breaches: 0 },
            { date: 'Feb 19', total: 2, closed: 2, open: 0, critical: 0, breaches: 0 }
        ];
    } else {
        title = 'Incidents This Month - Summary';
        incidents = [
            { week: 'Week 4 (Feb 18-24)', total: 47, closed: 38, open: 9, critical: 4, breaches: 8 },
            { week: 'Week 3 (Feb 11-17)', total: 52, closed: 48, open: 4, critical: 2, breaches: 5 },
            { week: 'Week 2 (Feb 4-10)', total: 45, closed: 42, open: 3, critical: 1, breaches: 4 },
            { week: 'Week 1 (Feb 1-3)', total: 40, closed: 37, open: 3, critical: 2, breaches: 3 }
        ];
    }
    
    let content = '<div style="max-height: 500px; overflow-y: auto;"><table class="data-table">';
    
    if (period === 'today') {
        content += `<thead><tr>
            <th>Time</th>
            <th>Incident Type</th>
            <th>Location</th>
            <th>SLA</th>
            <th>Resolution Time</th>
            <th>Status</th>
        </tr></thead><tbody>`;
        
        incidents.forEach(inc => {
            const statusColor = inc.status === 'Open' ? '#ffaa00' : '#00ff88';
            const breachColor = inc.breach ? '#ff3366' : '#00ff88';
            const breachText = inc.breach ? ' BREACH' : '✓ On Time';
            content += `<tr>
                <td>${inc.time}</td>
                <td>${inc.type}</td>
                <td>${inc.location}</td>
                <td>${inc.sla}</td>
                <td style="color: ${breachColor};">${inc.resolution} ${inc.breach ? breachText : ''}</td>
                <td style="color: ${statusColor}; font-weight: 600;">${inc.status}</td>
            </tr>`;
        });
    } else if (period === 'week') {
        content += `<thead><tr>
            <th>Date</th>
            <th>Total</th>
            <th>Closed</th>
            <th>Open</th>
            <th>Critical</th>
            <th>SLA Breaches</th>
        </tr></thead><tbody>`;
        
        incidents.forEach(inc => {
            content += `<tr>
                <td>${inc.date}</td>
                <td>${inc.total}</td>
                <td style="color: #00ff88;">${inc.closed}</td>
                <td style="color: #ffaa00;">${inc.open}</td>
                <td style="color: #ff3366;">${inc.critical}</td>
                <td style="color: ${inc.breaches > 0 ? '#ff3366' : '#00ff88'};">${inc.breaches}</td>
            </tr>`;
        });
    } else {
        content += `<thead><tr>
            <th>Week</th>
            <th>Total</th>
            <th>Closed</th>
            <th>Open</th>
            <th>Critical</th>
            <th>SLA Breaches</th>
        </tr></thead><tbody>`;
        
        incidents.forEach(inc => {
            content += `<tr>
                <td>${inc.week}</td>
                <td>${inc.total}</td>
                <td style="color: #00ff88;">${inc.closed}</td>
                <td style="color: #ffaa00;">${inc.open}</td>
                <td style="color: #ff3366;">${inc.critical}</td>
                <td style="color: ${inc.breaches > 0 ? '#ff3366' : '#00ff88'};">${inc.breaches}</td>
            </tr>`;
        });
    }
    
    content += '</tbody></table></div>';
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Show Incident Details from Card
function showIncidentDetailsCard(type) {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    let title = '';
    let content = '';
    
    const allIncidents = [
        { time: '14:35', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '15 min', breach: false },
        { time: '13:20', type: 'Unauthorized Access', location: 'LP Gate', status: 'Open', sla: '15 min', resolution: '35 min (ongoing)', breach: false },
        { time: '12:15', type: 'No Riding Helmet', location: 'Jokatte Gate', status: 'Closed', sla: '20 min', resolution: '12 min', breach: false },
        { time: '11:45', type: 'Tailgating', location: 'Main Gate', status: 'Closed', sla: '20 min', resolution: '18 min', breach: false },
        { time: '10:30', type: 'Speed Violation', location: 'Cargo Gate', status: 'Closed', sla: '30 min', resolution: '25 min', breach: false },
        { time: '09:50', type: 'No PPE Kit', location: 'E2 Gate', status: 'Open', sla: '15 min', resolution: '28 min (ongoing)', breach: false },
        { time: '09:15', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '22 min', breach: false },
        { time: '08:40', type: 'Expired Badge', location: 'LP Gate', status: 'Closed', sla: '20 min', resolution: '35 min', breach: true },
        { time: '08:10', type: 'Speed Violation', location: 'Jokatte Gate', status: 'Open', sla: '30 min', resolution: '18 min (ongoing)', breach: false },
        { time: '07:55', type: 'Unauthorized Vehicle', location: 'Main Gate', status: 'Closed', sla: '15 min', resolution: '22 min', breach: true },
        { time: '07:20', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '16 min', breach: false },
        { time: '06:45', type: 'No Riding Helmet', location: 'LP Gate', status: 'Open', sla: '20 min', resolution: '14 min (ongoing)', breach: false }
    ];
    
    let incidents = [];
    if (type === 'today') {
        title = 'All Incidents Today';
        incidents = allIncidents;
    } else if (type === 'open') {
        title = 'Open Incidents';
        incidents = allIncidents.filter(inc => inc.status === 'Open');
    } else if (type === 'closed') {
        title = 'Closed Incidents Today';
        incidents = allIncidents.filter(inc => inc.status === 'Closed');
    }
    
    content = '<div style="max-height: 500px; overflow-y: auto;"><table class="data-table"><thead><tr>';
    content += '<th>Time</th><th>Type</th><th>Location</th><th>SLA</th><th>Resolution</th><th>Status</th>';
    content += '</tr></thead><tbody>';
    
    incidents.forEach(inc => {
        const statusColor = inc.status === 'Open' ? '#ffaa00' : '#00ff88';
        const breachColor = inc.breach ? '#ff3366' : '#00ff88';
        content += `<tr>
            <td>${inc.time}</td>
            <td>${inc.type}</td>
            <td>${inc.location}</td>
            <td>${inc.sla}</td>
            <td style="color: ${breachColor};">${inc.resolution}${inc.breach ? ' ⚠️' : ''}</td>
            <td style="color: ${statusColor};">${inc.status}</td>
        </tr>`;
    });
    
    content += '</tbody></table></div>';
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

const INCIDENT_DATA = {
    'Speed Violation': [
        { time: '14:35', vehicleNo: 'KA-20-MN-5847', location: 'Main Gate Entry', speed: '65 km/h', evidenceImage: 'IMG_5847.jpg', dataSource: 'Speed Gun + ANPR' },
        { time: '10:30', vehicleNo: 'KA-19-AB-3421', location: 'Cargo Gate', speed: '58 km/h', evidenceImage: 'IMG_3421.jpg', dataSource: 'Speed Gun + ANPR' },
        { time: '09:15', vehicleNo: 'KA-21-CD-8765', location: 'Main Gate', speed: '62 km/h', evidenceImage: 'IMG_8765.jpg', dataSource: 'Speed Gun + ANPR' },
        { time: '07:20', vehicleNo: 'KA-18-EF-2134', location: 'Main Gate', speed: '70 km/h', evidenceImage: 'IMG_2134.jpg', dataSource: 'Speed Gun + ANPR' }
    ],
    'Unauthorized Access': [
        { time: '13:20', location: 'LP Gate', evidenceSnapshot: 'SNAP_1320.jpg', actionTaken: 'Access Denied, Security Alerted', dataSource: 'ACS' },
        { time: '07:55', location: 'Main Gate', evidenceSnapshot: 'SNAP_0755.jpg', actionTaken: 'Vehicle Stopped, ID Verified',dataSource: 'ACS' }
    ],
    'No Riding Helmet': [
        { time: '12:15', location: 'Jokatte Gate', vehiclePlate: 'KA-20-GH-9876', evidenceSnapshot: 'SNAP_1215.jpg', dataSource: 'ANPR' },
        { time: '06:45', location: 'LP Gate', vehiclePlate: 'KA-19-IJ-4567', evidenceSnapshot: 'SNAP_0645.jpg', dataSource: 'ANPR' }
    ],
    'Tailgating': [
        { time: '11:45', location: 'Main Gate', vehicle1: 'KA-21-KL-7890', vehicle2: 'KA-20-MN-1234', evidenceSnapshot: 'SNAP_1145.jpg', actionTaken: 'Both vehicles stopped and warned', dataSource: 'ANPR + CCTV' }
    ],
    'No PPE Kit': [
        { time: '09:50', location: 'E2 Gate', personnelID: 'EMP-2847', evidenceSnapshot: 'SNAP_0950.jpg', actionTaken: 'Entry Denied, Directed to PPE Station', dataSource: 'Face Recognition Camera' }
    ],
    'Expired Badge': [
        { time: '08:40', location: 'LP Gate', personnelName: 'Ramesh Kumar', badgeID: 'EMP-2847', expiredSince: '3 days', evidenceSnapshot: 'SNAP_0840.jpg', actionTaken: 'Access Denied, Directed to HR', dataSource: 'Badge Reader' }
    ],
    'Unauthorized Vehicle': [
        { time: '07:55', location: 'Main Gate', vehicleNo: 'KA-18-OP-5678', evidenceSnapshot: 'SNAP_0755_V.jpg', actionTaken: 'Vehicle Stopped, Registration Verified', dataSource: 'ANPR + Gate System' }
    ]
};

// Show Incidents By Type with Dropdown Filter
function showIncidentsByType(period) {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    const allIncidents = [
        { time: '14:35', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '15 min', breach: false },
        { time: '13:20', type: 'Unauthorized Access', location: 'LP Gate', status: 'Open', sla: '15 min', resolution: '35 min (ongoing)', breach: false },
        { time: '12:15', type: 'No Riding Helmet', location: 'Jokatte Gate', status: 'Closed', sla: '20 min', resolution: '12 min', breach: false },
        { time: '11:45', type: 'Tailgating', location: 'Main Gate', status: 'Closed', sla: '20 min', resolution: '18 min', breach: false },
        { time: '10:30', type: 'Speed Violation', location: 'Cargo Gate', status: 'Closed', sla: '30 min', resolution: '25 min', breach: false },
        { time: '09:50', type: 'No PPE Kit', location: 'E2 Gate', status: 'Open', sla: '15 min', resolution: '28 min (ongoing)', breach: false },
        { time: '09:15', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '22 min', breach: false },
        { time: '08:40', type: 'Expired Badge', location: 'LP Gate', status: 'Closed', sla: '20 min', resolution: '35 min', breach: true },
        { time: '08:10', type: 'Speed Violation', location: 'Jokatte Gate', status: 'Open', sla: '30 min', resolution: '18 min (ongoing)', breach: false },
        { time: '07:55', type: 'Unauthorized Vehicle', location: 'Main Gate', status: 'Closed', sla: '15 min', resolution: '22 min', breach: true },
        { time: '07:20', type: 'Speed Violation', location: 'Main Gate', status: 'Closed', sla: '30 min', resolution: '16 min', breach: false },
        { time: '06:45', type: 'No Riding Helmet', location: 'LP Gate', status: 'Open', sla: '20 min', resolution: '14 min (ongoing)', breach: false }
    ];
    
    let title = period === 'today' ? 'Incidents Today' : period === 'week' ? 'Incidents This Week' : 'Incidents This Month';
    
    modalTitle.textContent = title;
    
    // Store period globally for filtering
    window.currentIncidentPeriod = period;
    
    let content = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
                <label style="color: #00d4ff; margin-right: 10px; font-weight: 600;">Select Incident Type:</label>
                <select id="incidentTypeFilter" onchange="filterIncidentsByType()" style="padding: 0.6rem 1rem; background: #2d3561; color: #fff; border: 2px solid #00d4ff; border-radius: 8px; font-size: 0.9rem; cursor: pointer;">
                    <option value="all">All Incidents</option>
                    <option value="Speed Violation">Speed Violation</option>
                    <option value="Unauthorized Access">Unauthorized Access</option>
                    <option value="No Riding Helmet">No Riding Helmet</option>
                    <option value="Tailgating">Tailgating</option>
                    <option value="No PPE Kit">No PPE Kit</option>
                    <option value="Expired Badge">Expired Badge</option>
                    <option value="Unauthorized Vehicle">Unauthorized Vehicle</option>
                </select>
            </div>
            <button onclick="downloadIncidentReport()" style="padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.85rem; font-weight: 600;">
                 Download Report
            </button>
        </div>
        <div id="filteredIncidentsTable" style="max-height: 500px; overflow-y: auto;">
            <div id="incidentTableContainer"></div>
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    
    // Initial render with all incidents
    filterIncidentsByType();
}

// Filter incidents by type and render appropriate table
function filterIncidentsByType() {
    const filterValue = document.getElementById('incidentTypeFilter').value;
    const container = document.getElementById('incidentTableContainer');
    
    if (!container) return;
    
    let tableHTML = '';
    
    if (filterValue === 'all') {
        // Show all incidents with all columns
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Type</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle No.</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Speed</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        // Add all incidents
        Object.keys(INCIDENT_DATA).forEach(type => {
            INCIDENT_DATA[type].forEach((inc, idx) => {
                const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
                tableHTML += `
                    <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                        <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                        <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem;">${type}</td>
                        <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                        <td style="padding: 0.7rem; color: #00ff88; font-size: 0.8rem;">${inc.vehicleNo || inc.vehiclePlate || inc.vehicle1 || 'NA'}</td>
                        <td style="padding: 0.7rem; color: #ff3366; font-size: 0.8rem;">${inc.speed || 'NA'}</td>
                        <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;">${inc.evidenceImage || inc.evidenceSnapshot || 'NA'}</td>
                        <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.actionTaken || 'NA'}</td>
                        <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.dataSource || 'NA'}</td>
                    </tr>`;
            });
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'Speed Violation') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle Number</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Speed</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Image</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['Speed Violation'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.vehicleNo}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #ff3366; font-weight: 600; font-size: 0.8rem;">${inc.speed}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceImage}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'Unauthorized Access') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['Unauthorized Access'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.actionTaken}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'No Riding Helmet') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle Plate</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['No Riding Helmet'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.vehiclePlate}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'Tailgating') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle 1</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle 2</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['Tailgating'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.vehicle1}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.vehicle2}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.actionTaken}</td>
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'No PPE Kit') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Personnel ID</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['No PPE Kit'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.personnelID}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.actionTaken}</td>
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'Expired Badge') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Personnel Name</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Badge ID</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Expired Since</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['Expired Badge'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #ff3366; font-weight: 600; font-size: 0.8rem;">${inc.personnelName}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-size: 0.8rem;">${inc.badgeID}</td>
                    <td style="padding: 0.7rem; color: #ff3366; font-size: 0.8rem;">${inc.expiredSince}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.actionTaken}</td>
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
        
    } else if (filterValue === 'Unauthorized Vehicle') {
        tableHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                    <tr>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Time</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Location</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Vehicle Number</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Evidence Snapshot</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Action Taken</th>
                        <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem;">Data Source</th>
                    </tr>
                </thead>
                <tbody>`;
        
        INCIDENT_DATA['Unauthorized Vehicle'].forEach((inc, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            tableHTML += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.time}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${inc.location}</td>
                    <td style="padding: 0.7rem; color: #00ff88; font-weight: 600; font-size: 0.8rem;">${inc.vehicleNo}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-size: 0.8rem; cursor: pointer;"> ${inc.evidenceSnapshot}</td>
                    <td style="padding: 0.7rem; color: #ffaa00; font-size: 0.8rem;">${inc.actionTaken}</td>
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${inc.dataSource}</td>
                </tr>`;
        });
        
        tableHTML += `</tbody></table>`;
    }
    
    container.innerHTML = tableHTML;
}

// Download incident report
function downloadIncidentReport() {
    const filterValue = document.getElementById('incidentTypeFilter').value;
    const period = window.currentIncidentPeriod || 'today';
    
    alert(`Downloading ${filterValue === 'all' ? 'All Incidents' : filterValue} report for ${period}...\n\nThis would generate a PDF with the filtered incident data.`);
}

// Show SLA Breach Report Options - Step 1: Date Selection
function showSLABreachReportOptions() {
    const modal = document.createElement('div');
    modal.id = 'slaDatePickerModal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%); padding: 1.5rem; border-radius: 12px; border: 2px solid #00d4ff; max-width: 500px; width: 90%; box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem;">
            
                <h3 style="color: #00d4ff; margin: 0; font-size: 1.1rem;">Select Date Range for SLA Breach Report</h3>
            </div>
            
            <div style="background: rgba(0, 212, 255, 0.1); padding: 0.8rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #00d4ff;">
                <p style="color: #8b9dc3; margin: 0; font-size: 0.8rem;">
                     Select a date range to view SLA breaches and generate reports
                </p>
            </div>
            
            <div style="margin-bottom: 0.8rem;">
                <label style="color: #00d4ff; display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem;">From Date:</label>
                <input type="date" id="slaFromDate" max="${today}" style="width: 100%; padding: 0.7rem; background: #2d3561; color: #fff; border: 2px solid #00d4ff; border-radius: 8px; font-size: 0.9rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="color: #00d4ff; display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem;">To Date:</label>
                <input type="date" id="slaToDate" max="${today}" style="width: 100%; padding: 0.7rem; background: #2d3561; color: #fff; border: 2px solid #00d4ff; border-radius: 8px; font-size: 0.9rem;">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                <button onclick="setSLAQuickDate('today')" style="padding: 0.5rem; background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid #00d4ff; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 212, 255, 0.3)'" onmouseout="this.style.background='rgba(0, 212, 255, 0.2)'">
                    Today
                </button>
                <button onclick="setSLAQuickDate('week')" style="padding: 0.5rem; background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid #00d4ff; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 212, 255, 0.3)'" onmouseout="this.style.background='rgba(0, 212, 255, 0.2)'">
                    Last 7 Days
                </button>
                <button onclick="setSLAQuickDate('month')" style="padding: 0.5rem; background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid #00d4ff; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 212, 255, 0.3)'" onmouseout="this.style.background='rgba(0, 212, 255, 0.2)'">
                    Last 30 Days
                </button>
            </div>
            
            <button onclick="viewSLABreaches()" style="width: 100%; padding: 0.8rem; margin-bottom: 0.6rem; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600; box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 212, 255, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 212, 255, 0.4)'">
                 View SLA Breaches
            </button>
            
            <button onclick="document.getElementById('slaDatePickerModal').remove()" style="width: 100%; padding: 0.7rem; background: rgba(255,255,255,0.1); color: #8b9dc3; border: 1px solid #3d4a7a; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-size: 0.85rem;" onmouseover="this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                Cancel
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// View SLA Breaches for selected date range
function viewSLABreaches() {
    const fromDate = document.getElementById('slaFromDate').value;
    const toDate = document.getElementById('slaToDate').value;
    
    if (!fromDate || !toDate) {
        alert(' Please select both dates');
        return;
    }
    
    if (new Date(fromDate) > new Date(toDate)) {
        alert(' From date cannot be after To date');
        return;
    }
    
    // Close date picker modal
    document.getElementById('slaDatePickerModal').remove();
    
    // Generate breach data for the selected period
    const breachData = generateSLABreachData(fromDate, toDate);
    
    // Show breaches in modal
    showSLABreachDetails(fromDate, toDate, breachData);
}

// Generate SLA breach data for date range
function generateSLABreachData(fromDate, toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24)) + 1;
    
    const incidentTypes = [
        { type: 'Expired Badge', sla: 20, severity: 'Medium' },
        { type: 'Unauthorized Vehicle', sla: 15, severity: 'High' },
        { type: 'Speed Violation', sla: 30, severity: 'Low' },
        { type: 'PPE Violation', sla: 20, severity: 'Medium' },
        { type: 'Tailgating', sla: 15, severity: 'High' },
        { type: 'Badge Not Visible', sla: 20, severity: 'Medium' },
        { type: 'Unauthorized Access Attempt', sla: 15, severity: 'High' }
    ];
    
    const gates = ['Main Gate', 'LP Gate', 'Jokatte Gate', 'Cargo Gate', 'E2 Gate'];
    
    const breaches = [];
    const totalIncidents = daysDiff * 12; // ~12 incidents per day
    const breachCount = Math.floor(totalIncidents * 0.15); // 15% breach rate
    
    for (let i = 0; i < breachCount; i++) {
        const incident = incidentTypes[Math.floor(Math.random() * incidentTypes.length)];
        const gate = gates[Math.floor(Math.random() * gates.length)];
        const actualTime = incident.sla + Math.floor(Math.random() * 20) + 5; // 5-25 min over SLA
        const delay = actualTime - incident.sla;
        
        // Random date within range
        const randomDay = Math.floor(Math.random() * daysDiff);
        const breachDate = new Date(from.getTime() + randomDay * 24 * 60 * 60 * 1000);
        const time = `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
        
        breaches.push({
            date: breachDate.toISOString().split('T')[0],
            time: time,
            type: incident.type,
            location: gate,
            slaTarget: incident.sla,
            actualTime: actualTime,
            delay: delay,
            severity: incident.severity
        });
    }
    
    // Sort by date and time
    breaches.sort((a, b) => {
        const dateCompare = new Date(b.date) - new Date(a.date);
        if (dateCompare !== 0) return dateCompare;
        return b.time.localeCompare(a.time);
    });
    
    return {
        breaches: breaches,
        totalIncidents: totalIncidents,
        breachCount: breachCount,
        complianceRate: Math.round(((totalIncidents - breachCount) / totalIncidents) * 100)
    };
}

// Step 3: Show SLA Breach Details with Download Option
function showSLABreachDetails(fromDate, toDate, breachData) {
    const modal = document.createElement('div');
    modal.id = 'slaBreachDetailsModal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000; padding: 2rem;';
    
    const fromDateFormatted = new Date(fromDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const toDateFormatted = new Date(toDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    let breachRows = '';
    breachData.breaches.forEach((breach, index) => {
        const bgColor = index % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
        const severityColor = breach.severity === 'High' ? '#ff3366' : breach.severity === 'Medium' ? '#ffaa00' : '#8b9dc3';
        breachRows += `
            <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                <td style="padding: 0.6rem; color: #8b9dc3; font-size: 0.8rem;">${breach.date}</td>
                <td style="padding: 0.6rem; color: #8b9dc3; font-size: 0.8rem;">${breach.time}</td>
                <td style="padding: 0.6rem; color: #e0e0e0; font-size: 0.8rem;">${breach.type}</td>
                <td style="padding: 0.6rem; color: #00d4ff; font-size: 0.8rem;">${breach.location}</td>
                <td style="padding: 0.6rem; color: #8b9dc3; font-size: 0.8rem; text-align: center;">${breach.slaTarget} min</td>
                <td style="padding: 0.6rem; color: #ff3366; font-size: 0.8rem; font-weight: 600; text-align: center;">${breach.actualTime} min</td>
                <td style="padding: 0.6rem; color: #ff3366; font-size: 0.8rem; font-weight: 700; text-align: center;">+${breach.delay} min</td>
                <td style="padding: 0.6rem; text-align: center;"><span style="padding: 0.25rem 0.5rem; background: ${severityColor}22; color: ${severityColor}; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">${breach.severity}</span></td>
            </tr>
        `;
    });
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%); padding: 1.5rem; border-radius: 12px; border: 2px solid #00d4ff; max-width: 1200px; width: 95%; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);">
            
            <!-- Header -->
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <div>
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.3rem;">
                        

                        <h3 style="color: #00d4ff; margin: 0; font-size: 1.1rem;">SLA Breach Report</h3>
                    </div>
                    <p style="color: #8b9dc3; margin: 0; font-size: 0.8rem;"> ${fromDateFormatted} to ${toDateFormatted}</p>
                </div>
                <button onclick="document.getElementById('slaBreachDetailsModal').remove()" style="background: transparent; border: none; color: #8b9dc3; font-size: 1.8rem; cursor: pointer; line-height: 1; padding: 0; width: 35px; height: 35px; border-radius: 50%; transition: all 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#8b9dc3';">&times;</button>
            </div>
            
            <!-- Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-bottom: 1rem;">
                <div style="background: rgba(0, 212, 255, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #00d4ff;">
                    <div style="color: #8b9dc3; font-size: 0.75rem; margin-bottom: 0.2rem;">Total Incidents</div>
                    <div style="color: #00d4ff; font-size: 1.5rem; font-weight: bold;">${breachData.totalIncidents}</div>
                </div>
                <div style="background: rgba(255, 51, 102, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #ff3366;">
                    <div style="color: #8b9dc3; font-size: 0.75rem; margin-bottom: 0.2rem;">SLA Breaches</div>
                    <div style="color: #ff3366; font-size: 1.5rem; font-weight: bold;">${breachData.breachCount}</div>
                </div>
                <div style="background: rgba(0, 255, 136, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #00ff88;">
                    <div style="color: #8b9dc3; font-size: 0.75rem; margin-bottom: 0.2rem;">Compliance Rate</div>
                    <div style="color: #00ff88; font-size: 1.5rem; font-weight: bold;">${breachData.complianceRate}%</div>
                </div>
            </div>
            
            <!-- Table -->
            <div style="flex: 1; overflow-y: auto; margin-bottom: 1rem; background: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 0.5rem;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="text-align: left; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Date</th>
                            <th style="text-align: left; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Time</th>
                            <th style="text-align: left; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Incident Type</th>
                            <th style="text-align: left; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Location</th>
                            <th style="text-align: center; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">SLA Target</th>
                            <th style="text-align: center; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Actual Time</th>
                            <th style="text-align: center; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Delay</th>
                            <th style="text-align: center; padding: 0.6rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; font-weight: 600;">Severity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${breachRows}
                    </tbody>
                </table>
            </div>
            
            <!-- Download Button -->
            <button onclick="downloadSLABreachReport('${fromDate}', '${toDate}', ${JSON.stringify(breachData).replace(/"/g, '&quot;')})" style="width: 100%; padding: 0.8rem; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600; box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 212, 255, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 212, 255, 0.4)'">
                Download PDF Report
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Store breach data globally for download
    window.currentSLABreachData = { fromDate, toDate, breachData };
}

// Show SLA Breach Details
function showSLABreachDetails() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    const title = 'SLA Breach Report';
    const content = `
        <div style="max-height: 500px; overflow-y: auto;">
            <p style="color: #ff3366; margin-bottom: 15px; font-weight: 600;"> 2 incidents breached SLA today</p>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Incident Type</th>
                        <th>Location</th>
                        <th>SLA Target</th>
                        <th>Actual Time</th>
                        <th>Delay</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:40</td>
                        <td>Expired Badge</td>
                        <td>LP Gate</td>
                        <td>20 min</td>
                        <td style="color: #ff3366;">35 min</td>
                        <td style="color: #ff3366; font-weight: 600;">+15 min</td>
                    </tr>
                    <tr>
                        <td>07:55</td>
                        <td>Unauthorized Vehicle</td>
                        <td>Main Gate</td>
                        <td>15 min</td>
                        <td style="color: #ff3366;">22 min</td>
                        <td style="color: #ff3366; font-weight: 600;">+7 min</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 51, 102, 0.1); border-radius: 8px;">
                <strong style="color: #ff3366;">SLA Compliance Rate:</strong> 83% (10/12 incidents resolved within SLA)
            </div>
        </div>
    `;
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Download SLA Breach Report
function downloadSLABreachReport(fromDate, toDate, breachData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const fromDateFormatted = new Date(fromDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const toDateFormatted = new Date(toDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Header with gradient background
    doc.setFillColor(255, 51, 102);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('MRPL - SLA Breach Report', 105, 15, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Period: ${fromDateFormatted} to ${toDateFormatted}`, 105, 25, { align: 'center' });
    doc.text(`Generated: ${new Date().toLocaleString()}`, 105, 32, { align: 'center' });
    doc.text(`Total Days: ${Math.ceil((new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24)) + 1}`, 105, 39, { align: 'center' });
    
    // Summary Section
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Executive Summary', 14, 55);
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(`Total Incidents: ${breachData.totalIncidents}`, 14, 65);
    doc.setTextColor(0, 255, 136);
    doc.text(`Resolved Within SLA: ${breachData.totalIncidents - breachData.breachCount} (${breachData.complianceRate}%)`, 14, 72);
    doc.setTextColor(255, 51, 102);
    doc.text(`SLA Breaches: ${breachData.breachCount} (${100 - breachData.complianceRate}%)`, 14, 79);
    
    // Breach Details Table
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Breach Details', 14, 90);
    
    const tableData = breachData.breaches.map(breach => [
        breach.date,
        breach.time,
        breach.type,
        breach.location,
        `${breach.slaTarget} min`,
        `${breach.actualTime} min`,
        `+${breach.delay} min`,
        breach.severity
    ]);
    
    doc.autoTable({
        startY: 95,
        head: [['Date', 'Time', 'Incident Type', 'Location', 'SLA Target', 'Actual', 'Delay', 'Severity']],
        body: tableData,
        theme: 'grid',
        headStyles: {
            fillColor: [255, 51, 102],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 9
        },
        styles: {
            fontSize: 8,
            cellPadding: 3
        },
        columnStyles: {
            0: { cellWidth: 22 },
            1: { cellWidth: 15 },
            2: { cellWidth: 40 },
            3: { cellWidth: 25 },
            4: { cellWidth: 20, halign: 'center' },
            5: { cellWidth: 20, halign: 'center', textColor: [255, 51, 102], fontStyle: 'bold' },
            6: { cellWidth: 18, halign: 'center', textColor: [255, 51, 102], fontStyle: 'bold' },
            7: { cellWidth: 20, halign: 'center' }
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });
    
    let finalY = doc.lastAutoTable.finalY + 15;
    
    // Severity Breakdown
    const highSeverity = breachData.breaches.filter(b => b.severity === 'High').length;
    const mediumSeverity = breachData.breaches.filter(b => b.severity === 'Medium').length;
    const lowSeverity = breachData.breaches.filter(b => b.severity === 'Low').length;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Breach Analysis by Severity', 14, finalY);
    
    doc.autoTable({
        startY: finalY + 5,
        head: [['Severity', 'Count', 'Percentage']],
        body: [
            ['High', highSeverity, `${((highSeverity/breachData.breachCount)*100).toFixed(1)}%`],
            ['Medium', mediumSeverity, `${((mediumSeverity/breachData.breachCount)*100).toFixed(1)}%`],
            ['Low', lowSeverity, `${((lowSeverity/breachData.breachCount)*100).toFixed(1)}%`]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [0, 212, 255],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 10,
            cellPadding: 4
        }
    });
    
    finalY = doc.lastAutoTable.finalY + 15;
    
    // SLA Standards
    if (finalY > 250) {
        doc.addPage();
        finalY = 20;
    }
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('SLA Standards Reference', 14, finalY);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.text('• High Severity (Unauthorized Access, Security Breach, Tailgating): 15 minutes', 14, finalY + 8);
    doc.text('• Medium Severity (Badge Issues, PPE Violations, Expired Badge): 20 minutes', 14, finalY + 15);
    doc.text('• Low Severity (Speed Violations, Minor Infractions): 30 minutes', 14, finalY + 22);
    
    // Footer on all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
            `Page ${i} of ${pageCount} | MRPL - Integrated Security Command & Control System`,
            doc.internal.pageSize.getWidth() / 2,
            doc.internal.pageSize.getHeight() - 10,
            { align: 'center' }
        );
    }
    
    // Save PDF
    const filename = `MRPL_SLA_Breach_Report_${fromDate}_to_${toDate}.pdf`;
    doc.save(filename);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%); color: #1a1f3a; padding: 1rem 1.5rem; border-radius: 8px; font-weight: 600; z-index: 20000; box-shadow: 0 4px 15px rgba(0, 255, 136, 0.4);';
    successMsg.textContent = `✅ Report downloaded: ${filename}`;
    document.body.appendChild(successMsg);
    
    setTimeout(() => successMsg.remove(), 3000);
}

// Show CCTV System Health
function showCCTVHealth() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    const title = 'CCTV System Health - Camera Status';
    const content = `
        <div style="max-height: 500px; overflow-y: auto;">
            <p style="color: #8b9dc3; margin-bottom: 15px;">Camera operational status across all gates</p>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Gate</th>
                        <th>Total Cameras</th>
                        <th>Online</th>
                        <th>Offline</th>
                        <th>Health %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Main Gate</td>
                        <td>142</td>
                        <td style="color: #00ff88;">138</td>
                        <td style="color: #ff3366;">4</td>
                        <td style="color: #00ff88;">97.2%</td>
                    </tr>
                    <tr>
                        <td>LP Gate</td>
                        <td>85</td>
                        <td style="color: #00ff88;">83</td>
                        <td style="color: #ff3366;">2</td>
                        <td style="color: #00ff88;">97.6%</td>
                    </tr>
                    <tr>
                        <td>Jokatte Gate</td>
                        <td>128</td>
                        <td style="color: #00ff88;">124</td>
                        <td style="color: #ff3366;">4</td>
                        <td style="color: #00ff88;">96.9%</td>
                    </tr>
                    <tr>
                        <td>E2 Gate</td>
                        <td>64</td>
                        <td style="color: #00ff88;">62</td>
                        <td style="color: #ff3366;">2</td>
                        <td style="color: #00ff88;">96.9%</td>
                    </tr>
                    <tr>
                        <td>Cargo Gate</td>
                        <td>98</td>
                        <td style="color: #00ff88;">95</td>
                        <td style="color: #ff3366;">3</td>
                        <td style="color: #00ff88;">96.9%</td>
                    </tr>
                    <tr>
                        <td>Railway Sliding</td>
                        <td>42</td>
                        <td style="color: #00ff88;">41</td>
                        <td style="color: #ff3366;">1</td>
                        <td style="color: #00ff88;">97.6%</td>
                    </tr>
                    <tr>
                        <td>PCR</td>
                        <td>40</td>
                        <td style="color: #00ff88;">39</td>
                        <td style="color: #ff3366;">1</td>
                        <td style="color: #00ff88;">97.5%</td>
                    </tr>
                    <tr style="background: rgba(0, 212, 255, 0.1); font-weight: 600;">
                        <td>TOTAL</td>
                        <td>599</td>
                        <td style="color: #00ff88;">582</td>
                        <td style="color: #ff3366;">17</td>
                        <td style="color: #00ff88;">97.2%</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; padding: 10px; background: rgba(0, 255, 136, 0.1); border-radius: 8px; color: #00ff88;">
                <strong>System Status:</strong> Excellent - All critical areas covered
            </div>
        </div>
    `;
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}


// Show date range selector for uptime report
function showUptimeReportDateRange() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%); padding: 2rem; border-radius: 15px; border: 2px solid #00d4ff; max-width: 450px; width: 90%; box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);">
            <h3 style="color: #00d4ff; margin: 0 0 0.5rem 0; font-size: 1.3rem;">Select Date Range</h3>
            <p style="color: #00ff88; margin: 0 0 1.5rem 0; font-size: 0.9rem;">System Uptime Report</p>
            
            <div style="background: rgba(0, 212, 255, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">From:</label>
                    <input type="date" id="uptimeReportFromDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
                
                <div>
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">To:</label>
                    <input type="date" id="uptimeReportToDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
            </div>
            
            <div style="display: flex; gap: 0.8rem;">
                <button onclick="downloadUptimeReport()" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Download
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; background: #ff3366; color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set max date to today (no prefilled dates)
    const today = new Date();
    document.getElementById('uptimeReportToDate').max = today.toISOString().split('T')[0];
    document.getElementById('uptimeReportFromDate').max = today.toISOString().split('T')[0];
}

// Download Uptime Report (Day-to-day data)
function downloadUptimeReport() {
    const fromDate = document.getElementById('uptimeReportFromDate').value;
    const toDate = document.getElementById('uptimeReportToDate').value;
    
    if (!fromDate || !toDate) {
        alert('Please select both From and To dates');
        return;
    }
    
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    
    if (daysDiff < 0) {
        alert('From date must be before To date');
        return;
    }
    
    // Create CSV content with headers only
    let csvContent = 'MRPL ISCC - System Uptime Report\n';
    csvContent += `Date Range: ${fromDate} to ${toDate}\n`;
    csvContent += `Total Days: ${daysDiff + 1}\n`;
    csvContent += 'Report Generated: ' + new Date().toLocaleString() + '\n\n';
    csvContent += 'Day,Date,Uptime %,Downtime %,Total Minutes,Downtime Minutes\n';
    
    // Note: Data to be populated from NMS system
    csvContent += '\n[Data to be populated from Network Management System]\n';
    
    // Download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MRPL_Uptime_Report_${fromDate}_to_${toDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    // Close modal
    const modals = document.querySelectorAll('div[style*="position: fixed"]');
    modals.forEach(m => m.remove());
    
    alert('Uptime Report template downloaded successfully!');
}

// Devices with 90-day report limit (NMS stored data - cameras, readers, and IP-based devices)
const devices90DayLimit = [
    // All Camera Systems (VMS/NMS stored)
    'Indoor Dome Cameras- 5 MP',
    'Outdoor Fixed Cameras- 5 MP',
    'PTZ with IR - 2MP',
    'Panoramic Camera- 180° - 20 MP',
    'Panoramic Camera- 360° - 20 MP',
    'ANPR Cameras',
    'Face recognition Cameras',
    'Bullet Cameras',
    
    // Access Control & Readers (NMS stored)
    'Face recognition Readers',
    'QR Code Readers',
    'Long Range RFID Reader',
    'Handheld RFID Reader',
    
    // Network & Communication Devices (NMS stored)
    'Network Video Recorder (NVR)',
    'Video Wall (6 x 3)',
    'Video Wall (2 x 3)',
    'PA Speakers',
    'Intercom System',
    'Walkie Talkie',
    
    // Electronic Access Control (NMS stored)
    'Swing Barrier',
    'Flap Barrier',
    'Boom Barrier',
    'Sliding Gate',
    
    // Screening Systems (NMS stored)
    'Door Frame Metal Detector (DFMD)',
    'Hand Held Metal Detector (HHMD)',
    'Baggage Scanner',
    'Under Vehicle Surveillance System (UVSS)',
    'Explosive Trace Detector (ETD)'
];

// Show date range selector for device report download
function showDeviceReportDateRange(deviceType) {
    const hasLimit = devices90DayLimit.includes(deviceType);
    const maxDays = hasLimit ? 90 : 365;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%); padding: 2rem; border-radius: 15px; border: 2px solid #00d4ff; max-width: 450px; width: 90%; box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);">
            <h3 style="color: #00d4ff; margin: 0 0 0.5rem 0; font-size: 1.3rem;">Select Date Range</h3>
            <p style="color: #00ff88; margin: 0 0 1.5rem 0; font-size: 0.9rem;">${deviceType}</p>
            
            <div style="background: rgba(0, 212, 255, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">From:</label>
                    <input type="date" id="reportFromDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
                
                <div>
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">To:</label>
                    <input type="date" id="reportToDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
            </div>
            
            <p style="color: #00d4ff; font-size: 0.85rem; margin: 0 0 1.5rem 0; text-align: center; font-weight: 500;">
                ${hasLimit ? `Data available: Last ${maxDays} days` : `Data available: Last ${maxDays} days`}
            </p>
            
            <div style="display: flex; gap: 0.8rem;">
                <button onclick="downloadDeviceReport('${deviceType}', ${maxDays})" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Download
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; background: #ff3366; color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set max date to today (no prefilled dates)
    const today = new Date();
    document.getElementById('reportToDate').max = today.toISOString().split('T')[0];
    document.getElementById('reportFromDate').max = today.toISOString().split('T')[0];
}

// Download device report with date range
function downloadDeviceReport(deviceType, maxDays) {
    const fromDate = document.getElementById('reportFromDate').value;
    const toDate = document.getElementById('reportToDate').value;
    
    if (!fromDate || !toDate) {
        alert('Please select both From and To dates');
        return;
    }
    
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    
    if (daysDiff > maxDays) {
        alert(`Maximum ${maxDays} days report allowed for this device. Please select a shorter date range.`);
        return;
    }
    
    if (daysDiff < 0) {
        alert('From date must be before To date');
        return;
    }
    
    // Generate report with headers only
    let csvContent = `MRPL ISCC - Device Operational Report\n`;
    csvContent += `Device Type: ${deviceType}\n`;
    csvContent += `Date Range: ${fromDate} to ${toDate}\n`;
    csvContent += `Report Generated: ${new Date().toLocaleString()}\n\n`;
    csvContent += `Date,Device ID,Status,Uptime %,Downtime Minutes,Incidents,Alert Type,Resolution Time,Notes\n`;
    
    csvContent += '\n[Data to be populated from Network Management System]\n';
    
    // Download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MRPL_${deviceType.replace(/[^a-zA-Z0-9]/g, '_')}_Report_${fromDate}_to_${toDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    // Close modal
    document.querySelector('div[style*="position: fixed"]').remove();
    
    alert('Device report template downloaded successfully!');
}


// Show device report date range from modal
function showDeviceReportDateRangeFromModal() {
    // Get device type from modal title
    const modalTitle = document.getElementById('modalTitle').textContent;
    const deviceType = modalTitle.replace(' - Detailed Breakdown', '').trim();
    
    if (deviceType && deviceType !== 'Device Details') {
        showDeviceReportDateRange(deviceType);
    } else {
        alert('Unable to determine device type. Please try again.');
    }
}

// Show gate report date range selector
function showGateReportDateRange() {
    if (!currentSelectedGate) {
        alert('No gate selected. Please try again.');
        return;
    }
    
    const gateName = currentSelectedGate;
    const maxDays = 90; // Gate operational data typically stored for 90 days
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%); padding: 2rem; border-radius: 15px; border: 2px solid #00d4ff; max-width: 450px; width: 90%; box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);">
            <h3 style="color: #00d4ff; margin: 0 0 0.5rem 0; font-size: 1.3rem;">Select Date Range</h3>
            <p style="color: #00ff88; margin: 0 0 1.5rem 0; font-size: 0.9rem;">${gateName}</p>
            
            <div style="background: rgba(0, 212, 255, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">From:</label>
                    <input type="date" id="gateReportFromDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
                
                <div>
                    <label style="color: #8b9dc3; display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">To:</label>
                    <input type="date" id="gateReportToDate" style="width: 100%; padding: 0.6rem; border-radius: 8px; border: 2px solid #00d4ff; background: #0a0e27; color: #e0e0e0; font-size: 1rem;">
                </div>
            </div>
            
            <p style="color: #00d4ff; font-size: 0.85rem; margin: 0 0 1.5rem 0; text-align: center; font-weight: 500;">
                Data available: Last ${maxDays} days
            </p>
            
            <div style="display: flex; gap: 0.8rem;">
                <button onclick="downloadGateReport('${gateName}', ${maxDays})" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Download
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; background: #ff3366; color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set max date to today (no prefilled dates)
    const today = new Date();
    document.getElementById('gateReportToDate').max = today.toISOString().split('T')[0];
    document.getElementById('gateReportFromDate').max = today.toISOString().split('T')[0];
}

// Download gate report with date range
function downloadGateReport(gateName, maxDays) {
    const fromDate = document.getElementById('gateReportFromDate').value;
    const toDate = document.getElementById('gateReportToDate').value;
    
    if (!fromDate || !toDate) {
        alert('Please select both From and To dates');
        return;
    }
    
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    
    if (daysDiff > maxDays) {
        alert(`Maximum ${maxDays} days report allowed. Please select a shorter date range.`);
        return;
    }
    
    if (daysDiff < 0) {
        alert('From date must be before To date');
        return;
    }
    
    // Get gate devices
    const devices = gateDeviceDistribution[gateName] || {};
    const deviceList = Object.entries(devices)
        .filter(([device, count]) => count >= 1)
        .sort((a, b) => b[1] - a[1]);
    
    const totalDevices = deviceList.reduce((sum, [_, count]) => sum + count, 0);
    
    // Generate CSV report with headers only
    let csvContent = `MRPL ISCC - Gate Operational Report\n`;
    csvContent += `Gate Name: ${gateName}\n`;
    csvContent += `Date Range: ${fromDate} to ${toDate}\n`;
    csvContent += `Total Devices at Gate: ${totalDevices}\n`;
    csvContent += `Report Generated: ${new Date().toLocaleString()}\n\n`;
    
    // Device Summary Headers
    csvContent += `Device Summary\n`;
    csvContent += `Device Type,Count,Status,Uptime %,Last Maintenance Date\n`;
    
    csvContent += `\n\nDaily Operational Status\n`;
    csvContent += `Date,Total Devices,Devices Online,Devices Offline,Gate Uptime %,Access Granted,Access Denied,Incidents,Response Time (min)\n`;
    
    csvContent += `\n\nAccess Control Log\n`;
    csvContent += `Date,Time,Person/Vehicle ID,Entry/Exit,Method,Status,Gate Officer\n`;
    
    csvContent += '\n\n[Data to be populated from Access Control System and NMS]\n';
    
    // Download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MRPL_${gateName.replace(/[^a-zA-Z0-9]/g, '_')}_Report_${fromDate}_to_${toDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    // Close modal
    const modals = document.querySelectorAll('div[style*="position: fixed"]');
    modals.forEach(m => m.remove());
    
    alert('Gate report downloaded successfully!');
}

// Show shift-wise employee data
function showShiftData(shift) {
    // Update button styles
    const buttons = ['shiftABtn', 'shiftBBtn', 'shiftCBtn', 'generalBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            if (btnId === shift + 'Btn') {
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                btn.style.color = 'white';
                btn.style.border = 'none';
            } else {
                btn.style.background = 'rgba(102, 126, 234, 0.3)';
                btn.style.color = '#8b9dc3';
                btn.style.border = '2px solid #667eea';
            }
        }
    });
    
    const container = document.getElementById('shiftDataContainer');
    if (!container) return;
    
    let shiftName = '';
    let shiftTime = '';
    let employeeData = [];
    
    if (shift === 'shiftA') {
        shiftName = 'Shift A';
        shiftTime = '06:00 - 14:00';
        employeeData = [
            { empId: 'EMP-2456', time: '05:22', gate: 'Main Gate' },
            { empId: 'EMP-3789', time: '05:25', gate: 'Main Gate' },
            { empId: 'EMP-1234', time: '05:27', gate: 'LP Gate' },
            { empId: 'EMP-5678', time: '05:28', gate: 'Main Gate' },
            { empId: 'EMP-9012', time: '05:30', gate: 'E2 Gate' },
            { empId: 'EMP-2345', time: '05:35', gate: 'Jokatte Gate' },
            { empId: 'EMP-6789', time: '05:39', gate: 'Main Gate' },
            { empId: 'EMP-4567', time: '05:43', gate: 'LP Gate' },
            { empId: 'EMP-7890', time: '05:47', gate: 'Cargo Gate' },
            { empId: 'EMP-1357', time: '05:52', gate: 'Main Gate' }
        ];
    } else if (shift === 'shiftB') {
        shiftName = 'Shift B';
        shiftTime = '14:00 - 22:00';
        employeeData = [
            { empId: 'EMP-8901', time: '13:35', gate: 'Main Gate' },
            { empId: 'EMP-2468', time: '13:37', gate: 'LP Gate' },
            { empId: 'EMP-1357', time: '13:38', gate: 'Main Gate' },
            { empId: 'EMP-9753', time: '13:40', gate: 'Jokatte Gate' },
            { empId: 'EMP-8642', time: '13:41', gate: 'E2 Gate' },
            { empId: 'EMP-7531', time: '13:45', gate: 'Main Gate' },
            { empId: 'EMP-6420', time: '13:48', gate: 'Cargo Gate' },
            { empId: 'EMP-5319', time: '13:55', gate: 'LP Gate' },
            { empId: 'EMP-4208', time: '13:58', gate: 'Main Gate' },
            { empId: 'EMP-3197', time: '13:58', gate: 'Jokatte Gate' }
        ];
    } else if (shift === 'shiftC') {
        shiftName = 'Shift C';
        shiftTime = '22:00 - 06:00';
        employeeData = [
            { empId: 'EMP-2086', time: '21:25', gate: 'Main Gate' },
            { empId: 'EMP-1975', time: '21:27', gate: 'LP Gate' },
            { empId: 'EMP-8864', time: '21:28', gate: 'Main Gate' },
            { empId: 'EMP-7753', time: '21:30', gate: 'E2 Gate' },
            { empId: 'EMP-6642', time: '21:31', gate: 'Main Gate' },
            { empId: 'EMP-5531', time: '21:32', gate: 'Jokatte Gate' },
            { empId: 'EMP-4420', time: '21:33', gate: 'LP Gate' },
            { empId: 'EMP-3319', time: '21:36', gate: 'Main Gate' },
            { empId: 'EMP-2208', time: '21:40', gate: 'Cargo Gate' },
            { empId: 'EMP-1197', time: '21:48', gate: 'Main Gate' }
        ];
    } else if (shift === 'general') {
        shiftName = 'General Shift';
        shiftTime = '09:00 - 17:00';
        employeeData = [
            { empId: 'EMP-5001', time: '08:45', gate: 'Main Gate' },
            { empId: 'EMP-5002', time: '08:40', gate: 'Main Gate' },
            { empId: 'EMP-5003', time: '08:45', gate: 'LP Gate' },
            { empId: 'EMP-5004', time: '08:52', gate: 'Main Gate' },
            { empId: 'EMP-5005', time: '08:55', gate: 'Jokatte Gate' },
            { empId: 'EMP-5006', time: '08:50', gate: 'Main Gate' },
            { empId: 'EMP-5007', time: '08:55', gate: 'E2 Gate' },
            { empId: 'EMP-5008', time: '08:40', gate: 'Main Gate' },
            { empId: 'EMP-5009', time: '09:03', gate: 'LP Gate' },
            { empId: 'EMP-5010', time: '09:05', gate: 'Main Gate' }
        ];
    }
    
    let html = `
        <div style="background: rgba(102, 126, 234, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 style="color: #00d4ff; margin: 0; font-size: 1.1rem;">${shiftName}</h3>
                <span style="color: #00ff88; font-size: 0.9rem; font-weight: 600;">${shiftTime}</span>
            </div>
            <p style="color: #8b9dc3; margin: 0; font-size: 0.85rem;">Employee entries for this shift</p>
        </div>
        
        <div style="max-height: 300px; overflow-y: auto; position: relative;">
            <table class="data-table" style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                    <tr>
                        <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Employee ID</th>
                        <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Entry Time</th>
                        <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    employeeData.forEach(emp => {
        html += `
            <tr style="border-bottom: 1px solid #3d4a7a;">
                <td style="padding: 0.7rem; color: #00ff88; font-weight: 600;">${emp.empId}</td>
                <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">${emp.time}</td>
                <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">${emp.gate}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        <div style="margin-top: 1rem; padding: 0.7rem; background: rgba(0, 212, 255, 0.1); border-radius: 8px; color: #00d4ff; text-align: center;">
            <strong>Total ${shiftName} Entries:</strong> ${employeeData.length} employees
        </div>
    `;
    
    container.innerHTML = html;
}

// Show category-wise data (Contractors/Visitors)
function showCategoryData(category) {
    const container = document.getElementById('shiftDataContainer');
    if (!container) return;
    
    let categoryName = '';
    let categoryData = [];
    
    if (category === 'contractors') {
        categoryName = 'Contractors';
        categoryData = [
            { id: 'CON-4567', name: 'Ramesh Yadav', company: 'ABC Contractors', time: '09:00', gate: 'Cargo Gate' },
            { id: 'CON-7890', name: 'Suresh Naik', company: 'XYZ Services', time: '09:05', gate: 'Cargo Gate' },
            { id: 'CON-1234', name: 'Vijay Kumar', company: 'Tech Solutions', time: '09:10', gate: 'Main Gate' },
            { id: 'CON-5678', name: 'Prakash Singh', company: 'ABC Contractors', time: '09:15', gate: 'LP Gate' },
            { id: 'CON-9012', name: 'Mahesh Patil', company: 'Build Corp', time: '09:20', gate: 'Jokatte Gate' },
            { id: 'CON-3456', name: 'Ravi Sharma', company: 'XYZ Services', time: '09:25', gate: 'Cargo Gate' },
            { id: 'CON-7891', name: 'Anil Desai', company: 'Tech Solutions', time: '09:30', gate: 'Main Gate' },
            { id: 'CON-2345', name: 'Santosh Reddy', company: 'ABC Contractors', time: '09:35', gate: 'E2 Gate' },
            { id: 'CON-6789', name: 'Ganesh Naik', company: 'Build Corp', time: '09:40', gate: 'LP Gate' },
            { id: 'CON-1357', name: 'Dinesh Rao', company: 'XYZ Services', time: '09:45', gate: 'Main Gate' }
        ];
    } else if (category === 'visitors') {
        categoryName = 'Visitors';
        categoryData = [
            { id: 'VIS-1234', name: 'John Smith', purpose: 'Business Meeting', time: '10:30', gate: 'Main Gate' },
            { id: 'VIS-5678', name: 'Priya Menon', purpose: 'Audit', time: '10:35', gate: 'Main Gate' },
            { id: 'VIS-9012', name: 'Rajesh Gupta', purpose: 'Vendor Visit', time: '10:40', gate: 'Main Gate' },
            { id: 'VIS-3456', name: 'Sarah Johnson', purpose: 'Training', time: '10:45', gate: 'Main Gate' },
            { id: 'VIS-7890', name: 'Amit Verma', purpose: 'Inspection', time: '10:50', gate: 'LP Gate' },
            { id: 'VIS-2345', name: 'David Lee', purpose: 'Consultation', time: '10:55', gate: 'Main Gate' },
            { id: 'VIS-6789', name: 'Kavita Iyer', purpose: 'Site Visit', time: '11:00', gate: 'Main Gate' },
            { id: 'VIS-1357', name: 'Michael Brown', purpose: 'Business Meeting', time: '11:05', gate: 'Main Gate' },
            { id: 'VIS-9753', name: 'Sneha Patel', purpose: 'Vendor Visit', time: '11:10', gate: 'Jokatte Gate' },
            { id: 'VIS-8642', name: 'Robert Wilson', purpose: 'Audit', time: '11:15', gate: 'Main Gate' }
        ];
    }
    
    let html = `
        <div style="background: rgba(${category === 'contractors' ? '0, 255, 136' : '255, 170, 0'}, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
            <h3 style="color: ${category === 'contractors' ? '#00ff88' : '#ffaa00'}; margin: 0 0 0.5rem 0; font-size: 1.1rem;">${categoryName}</h3>
            <p style="color: #8b9dc3; margin: 0; font-size: 0.85rem;">All ${categoryName.toLowerCase()} entries today</p>
        </div>
        
        <div style="max-height: 300px; overflow-y: auto; position: relative;">
            <table class="data-table" style="width: 100%; border-collapse: collapse;">
                <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                    <tr>
                        <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">${category === 'contractors' ? 'Contractor ID' : 'Visitor ID'}</th>
                        <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Name</th>
                        <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">${category === 'contractors' ? 'Company' : 'Purpose'}</th>
                        <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Time</th>
                        <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    categoryData.forEach(item => {
        html += `
            <tr style="border-bottom: 1px solid #3d4a7a;">
                <td style="padding: 0.7rem; color: ${category === 'contractors' ? '#00ff88' : '#ffaa00'}; font-weight: 600;">${item.id}</td>
                <td style="padding: 0.7rem; color: #e0e0e0;">${item.name}</td>
                <td style="padding: 0.7rem; color: #8b9dc3;">${category === 'contractors' ? item.company : item.purpose}</td>
                <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">${item.time}</td>
                <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">${item.gate}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        <div style="margin-top: 1rem; padding: 0.7rem; background: rgba(${category === 'contractors' ? '0, 255, 136' : '255, 170, 0'}, 0.1); border-radius: 8px; color: ${category === 'contractors' ? '#00ff88' : '#ffaa00'}; text-align: center;">
            <strong>Total ${categoryName}:</strong> ${categoryData.length} entries today
        </div>
    `;
    
    container.innerHTML = html;
}

    // Handle Special Entries KPI
    if (type === 'specialEntries') {
        title = 'Special Entries - Details';
        content = `
            <div style="max-height: 500px; overflow-y: auto; position: relative;">
                <p style="color: #8b9dc3; margin-bottom: 15px;">Special entries without pass or emergency access</p>
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Name</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Gate</th>
                            <th style="padding: 0.8rem; text-align: center; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Time</th>
                            <th style="padding: 0.8rem; text-align: left; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.9rem; font-weight: 600; background: #1e2746;">Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">Rajesh Kumar</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">14:25</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Phone Call - Manager Approval</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">Priya Sharma</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">13:45</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Phone Call - Urgent Meeting</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #00d4ff; font-weight: 600;">Amit Patel</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">12:30</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Emergency - Fire Drill</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">Sunita Reddy</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Jokatte Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:50</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Phone Call - Vendor Visit</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">Vikram Singh</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Cargo Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">11:20</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Phone Call - Delivery</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #00d4ff; font-weight: 600;">Ramesh Yadav</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">E2 Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:45</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Emergency - Medical</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #ffaa00; font-weight: 600;">Kavita Desai</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Main Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">10:15</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Phone Call - Contractor</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.7rem; color: #00d4ff; font-weight: 600;">Anil Mehta</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">LP Gate</td>
                            <td style="padding: 0.7rem; text-align: center; color: #e0e0e0;">09:50</td>
                            <td style="padding: 0.7rem; color: #e0e0e0;">Emergency - Equipment Failure</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background: rgba(255, 170, 0, 0.1); border-radius: 8px; color: #ffaa00;">
                    <strong>Total Special Entries:</strong> 18 (Without Pass: 15 | Emergency: 3)
                </div>
            </div>
        `;
    }


// Initialize Incident Analytics Charts
function initializeIncidentCharts() {
    // 30-Day Incident Trend Chart
    const trendCtx = document.getElementById('incidentTrendChart');
    if (trendCtx) {
        new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Feb 1', 'Feb 3', 'Feb 5', 'Feb 7', 'Feb 9', 'Feb 11', 'Feb 13', 'Feb 15', 'Feb 17', 'Feb 19', 'Feb 21', 'Feb 23', 'Feb 25'],
                datasets: [{
                    label: 'Total Incidents',
                    data: [8, 6, 9, 7, 5, 10, 8, 6, 9, 4, 6, 8, 12],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: '#00d4ff',
                    pointHoverRadius: 7
                }, {
                    label: 'SLA Breaches',
                    data: [1, 0, 1, 0, 0, 2, 1, 0, 1, 0, 1, 1, 2],
                    borderColor: '#ff3366',
                    backgroundColor: 'rgba(255, 51, 102, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: '#ff3366',
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#e0e0e0',
                            font: { size: 12 },
                            padding: 15
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(26, 31, 58, 0.95)',
                        titleColor: '#00d4ff',
                        bodyColor: '#e0e0e0',
                        borderColor: '#00d4ff',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#8b9dc3', font: { size: 11 } },
                        grid: { color: 'rgba(61, 74, 122, 0.3)' }
                    },
                    x: {
                        ticks: { color: '#8b9dc3', font: { size: 11 } },
                        grid: { color: 'rgba(61, 74, 122, 0.3)' }
                    }
                }
            }
        });
    }

    // Severity Breakdown Chart with Tooltips
    const severityCtx = document.getElementById('severityChart');
    if (severityCtx) {
        // Define incident categories for each severity - Refinery Security Context
        const incidentCategories = {
            'High': [
                'Unauthorized Access',
                'Security Breach',
                'Unauthorized Vehicle Entry',
                'Tailgating',
                'No PPE Kit',
                'Blacklisted Vehicle Entry',
                'Explosive/Hazardous Material Detection'
            ],
            'Medium': [
                'Expired Badge Access Attempt',
                'Wild Animal Spotted',
                'Badge Not Visible',
                'Speed Violation in Plant Area',
                'Restricted Area Entry Without Permission'
            ],
            'Low': [
                'No Riding Helmet',
                'Speed Violation in Non-Plant Area',
                'Late Badge Renewal',
                'Visitor Protocol Violation'
            ]
        };
        
        new Chart(severityCtx, {
            type: 'bar',
            data: {
                labels: ['High', 'Medium', 'Low'],
                datasets: [{
                    label: 'Incidents',
                    data: [3, 4, 5],
                    backgroundColor: [
                        'rgba(255, 51, 102, 0.7)',
                        'rgba(255, 170, 0, 0.7)',
                        'rgba(0, 255, 136, 0.7)'
                    ],
                    borderColor: [
                        '#ff3366',
                        '#ffaa00',
                        '#00ff88'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(26, 31, 58, 0.95)',
                        titleColor: '#00d4ff',
                        bodyColor: '#e0e0e0',
                        borderColor: '#00d4ff',
                        borderWidth: 2,
                        padding: 15,
                        displayColors: false,
                        callbacks: {
                            title: function(context) {
                                return context[0].label + ' Severity Incidents';
                            },
                            label: function(context) {
                                return 'Total: ' + context.parsed.y + ' incidents';
                            },
                            afterLabel: function(context) {
                                const severity = context.label;
                                const categories = incidentCategories[severity];
                                return '\n\nIncident Types:\n' + categories.map(cat => '• ' + cat).join('\n');
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { 
                            color: '#8b9dc3',
                            font: { size: 11 },
                            stepSize: 1
                        },
                        grid: { color: 'rgba(61, 74, 122, 0.3)' },
                        title: {
                            display: true,
                            text: 'Number of Incidents',
                            color: '#8b9dc3',
                            font: { size: 12 }
                        }
                    },
                    x: {
                        ticks: { color: '#e0e0e0', font: { size: 12, weight: 'bold' } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Command & Control Functions
function showSecurityStatusDetails() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Overall Security Status - Details';
    modalBody.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: rgba(0, 255, 136, 0.1); border: 2px solid rgba(0, 255, 136, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00ff88; font-weight: bold;">NORMAL</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Current Status</div>
                </div>
                <div style="background: rgba(0, 212, 255, 0.1); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00d4ff; font-weight: bold;">12</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Active Incidents</div>
                </div>
                <div style="background: rgba(0, 212, 255, 0.1); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00d4ff; font-weight: bold;">96.8%</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">System Health</div>
                </div>
            </div>
            
            <h4 style="color: #00d4ff; margin: 1.5rem 0 1rem 0;">System Status Overview</h4>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Status</th>
                        <th>Health</th>
                        <th>Last Check</th>
                        <th>Data Source</th>
                        <th>Attachment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CCTV Surveillance</td>
                        <td><span class="status-badge good">OPERATIONAL</span></td>
                        <td style="color: #00ff88;">96.8%</td>
                        <td>2 min ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td>Access Control</td>
                        <td><span class="status-badge good">OPERATIONAL</span></td>
                        <td style="color: #00ff88;">98.5%</td>
                        <td>1 min ago</td>
                        <td style="color: #00d4ff;">ACS + Barriers</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td>ANPR System</td>
                        <td><span class="status-badge good">OPERATIONAL</span></td>
                        <td style="color: #00ff88;">100%</td>
                        <td>3 min ago</td>
                        <td style="color: #00d4ff;">ANPR Cameras</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td>Face Recognition</td>
                        <td><span class="status-badge good">OPERATIONAL</span></td>
                        <td style="color: #00ff88;">97.2%</td>
                        <td>2 min ago</td>
                        <td style="color: #00d4ff;">FR Readers + Cameras</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td>Speed Detection</td>
                        <td><span class="status-badge good">OPERATIONAL</span></td>
                        <td style="color: #00ff88;">95.0%</td>
                        <td>5 min ago</td>
                        <td style="color: #00d4ff;">Speed Radar + ANPR</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    modal.style.display = 'block';
}

function showCCTVSystemHealth() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'CCTV System Health - Detailed Report';
    modalBody.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: rgba(0, 255, 136, 0.1); border: 2px solid rgba(0, 255, 136, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00ff88; font-weight: bold;">245</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Online Cameras</div>
                </div>
                <div style="background: rgba(255, 51, 102, 0.1); border: 2px solid rgba(255, 51, 102, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #ff3366; font-weight: bold;">8</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Offline Cameras</div>
                </div>
                <div style="background: rgba(0, 212, 255, 0.1); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00d4ff; font-weight: bold;">96.8%</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">System Health</div>
                </div>
            </div>
            
            <h4 style="color: #00d4ff; margin: 1.5rem 0 1rem 0;">Cameras Under Maintenance</h4>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Camera ID</th>
                        <th>Location</th>
                        <th>Issue</th>
                        <th>Since</th>
                        <th>Data Source</th>
                        <th>Attachment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="color: #ff3366;">CAM-045</td>
                        <td>Main Gate - Entry</td>
                        <td>Lens Cleaning Required</td>
                        <td>2 hours ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366;">CAM-112</td>
                        <td>LP Gate - Exit</td>
                        <td>Network Issue</td>
                        <td>4 hours ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366;">CAM-178</td>
                        <td>Cargo Area</td>
                        <td>Power Supply</td>
                        <td>1 hour ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366;">CAM-203</td>
                        <td>Perimeter - North</td>
                        <td>Camera Adjustment</td>
                        <td>30 min ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366;">CAM-234</td>
                        <td>Tank Farm</td>
                        <td>Firmware Update</td>
                        <td>3 hours ago</td>
                        <td style="color: #00d4ff;">Axxon One VMS</td>
                        <td style="text-align: center; color: #00d4ff; cursor: pointer;"> View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    modal.style.display = 'block';
}

function showGateProcessingDetails() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Gate Processing Time - Detailed Analysis';
    modalBody.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            <div style="background: rgba(0, 212, 255, 0.1); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 1rem; text-align: center; margin-bottom: 1.5rem;">
                <div style="font-size: 2.5rem; color: #00d4ff; font-weight: bold;">1 minute</div>
                <div style="font-size: 0.9rem; color: #8b9dc3; margin-top: 0.5rem;">Average Processing Time (All Gates)</div>
                <div style="font-size: 0.85rem; color: #ffaa00; margin-top: 0.5rem;">Threshold: 1 min 10 sec</div>
            </div>
            
            <h4 style="color: #00d4ff; margin: 1.5rem 0 1rem 0;">Gate-wise Processing Time</h4>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Gate Name</th>
                        <th>Avg Time</th>
                        <th>Vehicles Today</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600; color: #00d4ff;">Main Gate</td>
                        <td style="color: #00ff88;">55s</td>
                        <td>1,245</td>
                        <td style="color: #00ff88;">Ok</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; color: #00d4ff;">Cargo Gate</td>
                        <td style="color: #00ff88;">1m 10s</td>
                        <td>285</td>
                        <td style="color: #00ff88;">Ok</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; color: #00d4ff;">LP Gate</td>
                        <td style="color: #00ff88;">50s</td>
                        <td>856</td>
                        <td style="color: #00ff88;">Ok</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; color: #00d4ff;">Jokatte Gate</td>
                        <td style="color: #00ff88;">1m 5s</td>
                        <td>642</td>
                        <td style="color: #00ff88;">Ok</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; color: #00d4ff;">E2 Gate</td>
                        <td style="color: #ffaa00;">1m 25s</td>
                        <td>198</td>
                        <td style="color: #ffaa00;">Rain/Fog affecting sensor visibility</td>
                    </tr>
                </tbody>
            </table>
            
    
        </div>
    `;
    modal.style.display = 'block';
}

// Vehicle & Speed Monitoring Functions
function showExpiredBadgeAttempts() {
    console.log('showExpiredBadgeAttempts called');
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    console.log('Modal element:', modal);
    
    modalTitle.textContent = 'Expired Badge Access Attempts - Today';
    modalBody.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            <p style="color: #8b9dc3; margin-bottom: 15px;">Personnel who attempted access with expired badges</p>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Badge ID</th>
                        <th>Gate</th>
                        <th>Expired Since</th>
                        <th>Action Taken</th>
                        <th>Remarks</th>
                        <th>Data Source</th>
                        <th>Attachment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>14:35</td>
                        <td style="color: #ff3366; font-weight: 600;">Ramesh Kumar</td>
                        <td>EMP-2847</td>
                        <td>Main Gate</td>
                        <td style="color: #ff3366;">3 days</td>
                        <td style="color: #ffaa00;">Access Denied</td>
                        <td>Directed to HR for renewal</td>
                        <td style="color: #00d4ff;">FR Reader</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td>13:20</td>
                        <td style="color: #ff3366; font-weight: 600;">Priya Sharma</td>
                        <td>CON-5621</td>
                        <td>LP Gate</td>
                        <td style="color: #ff3366;">1 day</td>
                        <td style="color: #ffaa00;">Access Denied</td>
                        <td>Contractor notified</td>
                        <td style="color: #00d4ff;">FR Camera</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td>11:45</td>
                        <td style="color: #ff3366; font-weight: 600;">Vijay Patel</td>
                        <td>VIS-8934</td>
                        <td>Cargo Gate</td>
                        <td style="color: #ff3366;">7 days</td>
                        <td style="color: #ff3366;">Access Denied</td>
                        <td>Visitor pass expired, escorted out</td>
                        <td style="color: #00d4ff;">ACS</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td>10:30</td>
                        <td style="color: #ff3366; font-weight: 600;">Sunita Reddy</td>
                        <td>CON-4512</td>
                        <td>Jokatte Gate</td>
                        <td style="color: #ff3366;">2 days</td>
                        <td style="color: #ffaa00;">Access Denied</td>
                        <td>Supervisor contacted</td>
                        <td style="color: #00d4ff;">FR Reader</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td>09:15</td>
                        <td style="color: #ff3366; font-weight: 600;">Anil Mehta</td>
                        <td>EMP-3298</td>
                        <td>E2 Gate</td>
                        <td style="color: #ff3366;">5 days</td>
                        <td style="color: #ff3366;">Access Denied</td>
                        <td>Security alert raised</td>
                        <td style="color: #00d4ff;">Swing Barrier</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td>08:50</td>
                        <td style="color: #ff3366; font-weight: 600;">Kavita Desai</td>
                        <td>VIS-7621</td>
                        <td>Main Gate</td>
                        <td style="color: #ff3366;">1 day</td>
                        <td style="color: #ffaa00;">Access Denied</td>
                        <td>Temporary pass issued after verification</td>
                        <td style="color: #00d4ff;">FR Camera</td>
                        <td><span style="color: #00d4ff; cursor: pointer;">View</span></td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 51, 102, 0.1); border-radius: 8px; color: #ff3366;">
                <strong>Total Expired Badge Attempts:</strong> 6 today
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function showSpeedViolations(area) {
    console.log('showSpeedViolations called with area:', area);
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    console.log('Modal element:', modal);
    
    const isPlant = area === 'plant';
    const speedLimit = isPlant ? 20 : 30;
    const areaName = isPlant ? 'Plant Area' : 'Non-Plant Area';
    
    // Store area type globally for filtering
    window.currentSpeedViolationArea = area;
    
    modalTitle.textContent = `Speed Violations - ${areaName} (Limit: ${speedLimit} km/h)`;
    
    const today = new Date().toISOString().split('T')[0];
    
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 550px;">
            <!-- Date Range Picker -->
            <div style="background: rgba(0, 212, 255, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #00d4ff;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="color: #00d4ff; display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem;">From Date:</label>
                        <input type="date" id="speedFromDate" max="${today}" onchange="filterSpeedViolations()" style="width: 100%; padding: 0.6rem; background: #2d3561; color: #fff; border: 2px solid #00d4ff; border-radius: 6px; font-size: 0.85rem;">
                    </div>
                    <div>
                        <label style="color: #00d4ff; display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem;">To Date:</label>
                        <input type="date" id="speedToDate" max="${today}" onchange="filterSpeedViolations()" style="width: 100%; padding: 0.6rem; background: #2d3561; color: #fff; border: 2px solid #00d4ff; border-radius: 6px; font-size: 0.85rem;">
                    </div>
                </div>
            </div>
            
            <!-- Violations Table -->
            <div id="speedViolationsContainer" style="flex: 1; overflow-y: auto;"></div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Initial load with all data
    filterSpeedViolations();
}

// Filter speed violations based on date range
function filterSpeedViolations() {
    const area = window.currentSpeedViolationArea;
    const fromDate = document.getElementById('speedFromDate')?.value;
    const toDate = document.getElementById('speedToDate')?.value;
    const container = document.getElementById('speedViolationsContainer');
    
    if (!container || !area) return;
    
    const isPlant = area === 'plant';
    const speedLimit = isPlant ? 20 : 30;
    const areaName = isPlant ? 'Plant Area' : 'Non-Plant Area';
    
    // Generate violations data with dates
    const allViolations = isPlant ? [
        { date: '2026-02-26', time: '14:45', vehicle: 'KA-19-MH-5847', speed: 28, location: 'Tank Farm Road', driver: 'Rajesh Kumar' },
        { date: '2026-02-26', time: '13:30', vehicle: 'KA-20-AB-3421', speed: 26, location: 'Processing Unit', driver: 'Amit Patel' },
        { date: '2026-02-25', time: '12:15', vehicle: 'KA-19-CD-8765', speed: 32, location: 'Storage Area', driver: 'Vijay Singh' },
        { date: '2026-02-25', time: '11:20', vehicle: 'KA-20-EF-2134', speed: 25, location: 'Refinery Road', driver: 'Suresh Reddy' },
        { date: '2026-02-24', time: '10:45', vehicle: 'KA-19-GH-9876', speed: 29, location: 'Tank Farm', driver: 'Priya Sharma' },
        { date: '2026-02-24', time: '10:10', vehicle: 'KA-20-IJ-4567', speed: 27, location: 'Processing Unit', driver: 'Anil Mehta' },
        { date: '2026-02-23', time: '09:30', vehicle: 'KA-19-KL-7890', speed: 31, location: 'Storage Area', driver: 'Kavita Desai' },
        { date: '2026-02-23', time: '09:00', vehicle: 'KA-20-MN-1234', speed: 24, location: 'Refinery Road', driver: 'Ramesh Yadav' },
        { date: '2026-02-22', time: '08:45', vehicle: 'KA-19-OP-5678', speed: 28, location: 'Tank Farm Road', driver: 'Sunita Iyer' },
        { date: '2026-02-22', time: '08:20', vehicle: 'KA-20-QR-9012', speed: 26, location: 'Processing Unit', driver: 'Vikram Singh' },
        { date: '2026-02-21', time: '08:00', vehicle: 'KA-19-ST-3456', speed: 30, location: 'Storage Area', driver: 'Deepak Kumar' },
        { date: '2026-02-21', time: '07:40', vehicle: 'KA-20-UV-7890', speed: 25, location: 'Refinery Road', driver: 'Anjali Nair' }
    ] : [
        { date: '2026-02-26', time: '15:20', vehicle: 'KA-19-AB-1234', speed: 38, location: 'Access Road', driver: 'Manoj Kumar' },
        { date: '2026-02-26', time: '14:10', vehicle: 'KA-20-CD-5678', speed: 35, location: 'Perimeter Road', driver: 'Sanjay Patel' },
        { date: '2026-02-25', time: '12:45', vehicle: 'KA-19-EF-9012', speed: 42, location: 'Main Approach', driver: 'Ravi Sharma' },
        { date: '2026-02-25', time: '11:30', vehicle: 'KA-20-GH-3456', speed: 34, location: 'Service Road', driver: 'Prakash Reddy' },
        { date: '2026-02-24', time: '10:50', vehicle: 'KA-19-IJ-7890', speed: 36, location: 'Access Road', driver: 'Neha Desai' },
        { date: '2026-02-24', time: '09:40', vehicle: 'KA-20-KL-1234', speed: 39, location: 'Perimeter Road', driver: 'Arjun Mehta' },
        { date: '2026-02-23', time: '08:55', vehicle: 'KA-19-MN-5678', speed: 33, location: 'Main Approach', driver: 'Pooja Singh' },
        { date: '2026-02-23', time: '08:15', vehicle: 'KA-20-OP-9012', speed: 37, location: 'Service Road', driver: 'Kiran Rao' }
    ];
    
    // Filter by date range if provided
    let filteredViolations = allViolations;
    if (fromDate && toDate) {
        filteredViolations = allViolations.filter(v => {
            return v.date >= fromDate && v.date <= toDate;
        });
    }
    
    // Render table
    let html = `
        <div style="background: rgba(0, 212, 255, 0.05); padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem;">
            <p style="color: #8b9dc3; margin: 0; font-size: 0.85rem;">
                Vehicles exceeding ${speedLimit} km/h speed limit in ${areaName.toLowerCase()}
                ${fromDate && toDate ? ` | Date Range: ${fromDate} to ${toDate}` : ' | All Records'}
            </p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
            <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                <tr>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Date</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Time</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Vehicle No.</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Speed</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Location</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Driver</th>
                    <th style="padding: 0.7rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.8rem; text-align: left;">Action</th>
                </tr>
            </thead>
            <tbody>`;
    
    if (filteredViolations.length === 0) {
        html += `
            <tr>
                <td colspan="7" style="padding: 2rem; text-align: center; color: #8b9dc3;">
                    No violations found for the selected date range
                </td>
            </tr>`;
    } else {
        filteredViolations.forEach((v, idx) => {
            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
            const speedColor = v.speed > speedLimit + 10 ? '#ff3366' : '#ffaa00';
            const action = v.speed > speedLimit + 10 ? 'Warning Issued' : 'Verbal Warning';
            
            html += `
                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${v.date}</td>
                    <td style="padding: 0.7rem; color: #8b9dc3; font-size: 0.8rem;">${v.time}</td>
                    <td style="padding: 0.7rem; color: #00d4ff; font-weight: 600; font-size: 0.8rem;">${v.vehicle}</td>
                    <td style="padding: 0.7rem; color: ${speedColor}; font-weight: bold; font-size: 0.8rem;">${v.speed} km/h</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${v.location}</td>
                    <td style="padding: 0.7rem; color: #e0e0e0; font-size: 0.8rem;">${v.driver}</td>
                    <td style="padding: 0.7rem; color: ${speedColor}; font-size: 0.8rem;">${action}</td>
                </tr>`;
        });
    }
    
    html += `
            </tbody>
        </table>
        
        <div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 51, 102, 0.1); border-radius: 8px; border-left: 4px solid #ff3366;">
            <strong style="color: #ff3366;">Total Violations:</strong> 
            <span style="color: #e0e0e0;">${filteredViolations.length} in ${areaName}</span>
        </div>
    `;
    
    container.innerHTML = html;
}

function showTankerMovement() {
    console.log('showTankerMovement called');
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    console.log('Modal element:', modal);
    
    modalTitle.textContent = 'Tanker Movement - Today\'s Logistics';
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 500px;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: rgba(0, 212, 255, 0.1); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00d4ff; font-weight: bold;">45</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Total Entries</div>
                </div>
                <div style="background: rgba(0, 255, 136, 0.1); border: 2px solid rgba(0, 255, 136, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #00ff88; font-weight: bold;">28</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Dispatched</div>
                </div>
                <div style="background: rgba(255, 170, 0, 0.1); border: 2px solid rgba(255, 170, 0, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #ffaa00; font-weight: bold;">12</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">Loading/Unloading</div>
                </div>
                <div style="background: rgba(139, 157, 195, 0.1); border: 2px solid rgba(139, 157, 195, 0.3); border-radius: 8px; padding: 1rem; text-align: center;">
                    <div style="font-size: 2rem; color: #8b9dc3; font-weight: bold;">5</div>
                    <div style="font-size: 0.85rem; color: #8b9dc3; margin-top: 0.5rem;">In Queue</div>
                </div>
            </div>
            
            <h4 style="color: #00d4ff; margin: 0 0 1rem 0;">Active Tanker Operations</h4>
            
            <div style="flex: 1; overflow-y: auto; background: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 0.5rem;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        <tr>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Vehicle No.</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Item</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Entry Time</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Status</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Bay</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Progress</th>
                            <th style="text-align: left; padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; font-weight: 600;">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-20-MN-5847</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Sulphur</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">14:20</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(255, 170, 0, 0.2); color: #ffaa00; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Loading</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 3</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">75% complete</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">ETA 15 min</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-19-AB-3421</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Petrol</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">13:45</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(255, 170, 0, 0.2); color: #ffaa00; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Loading</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 1</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">60% complete</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">ETA 25 min</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-21-CD-8765</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Kerosene</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">13:10</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Dispatched</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 5</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">Completed</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Exited at 13:55</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-18-EF-2134</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">LPG</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">12:50</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(139, 157, 195, 0.2); color: #8b9dc3; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Queue</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">-</td>
                            <td style="padding: 0.8rem; color: #ffaa00; font-size: 0.85rem;">Waiting</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Safety inspection pending</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-20-GH-9876</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Diesel</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">12:30</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(255, 170, 0, 0.2); color: #ffaa00; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Loading</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 4</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">45% complete</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">ETA 35 min</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-19-IJ-4567</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Petrol</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">11:55</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(255, 51, 102, 0.2); color: #ff3366; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Unloading</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 6</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">85% complete</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">ETA 12 min</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-21-KL-7890</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Kerosene</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">11:20</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(139, 157, 195, 0.2); color: #8b9dc3; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Queue</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">-</td>
                            <td style="padding: 0.8rem; color: #ffaa00; font-size: 0.85rem;">Waiting</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Document verification</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-20-MN-1234</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Diesel</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">10:45</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Dispatched</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 2</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">Completed</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Exited at 11:30</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-19-OP-5678</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">Petrol</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">10:15</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(255, 170, 0, 0.2); color: #ffaa00; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Loading</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 7</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">30% complete</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">ETA 45 min</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #3d4a7a;">
                            <td style="padding: 0.8rem; color: #00d4ff; font-weight: 600; font-size: 0.85rem;">KA-18-QR-9012</td>
                            <td style="padding: 0.8rem; color: #e0e0e0; font-size: 0.85rem;">LPG</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">09:50</td>
                            <td style="padding: 0.8rem;"><span style="padding: 0.3rem 0.6rem; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Dispatched</span></td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Bay 3</td>
                            <td style="padding: 0.8rem; color: #00ff88; font-size: 0.85rem;">Completed</td>
                            <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.85rem;">Exited at 10:40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function showRepeatOffenders() {
    console.log('showRepeatOffenders called');
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    console.log('Modal element:', modal);
    
    modalTitle.textContent = 'Repeat Offenders - Weekly Summary';
    modalBody.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            <p style="color: #8b9dc3; margin-bottom: 15px;">Drivers with multiple violations this week</p>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Driver Name</th>
                        <th>Vehicle No.</th>
                        <th>Violations</th>
                        <th>Last Incident</th>
                        <th>Type</th>
                        <th>Action Taken</th>
                        <th>Remarks</th>
                        <th>Data Source</th>
                        <th>Attachment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="color: #ff3366; font-weight: 600;">Rajesh Kumar</td>
                        <td>KA-19-MH-5847</td>
                        <td style="color: #ff3366; font-weight: bold;">4</td>
                        <td>Today, 14:45</td>
                        <td>Speed (Plant)</td>
                        <td style="color: #ff3366;">Final Warning</td>
                        <td>Penalty notice issued, training mandatory</td>
                        <td style="color: #00d4ff;">ESRPMS</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366; font-weight: 600;">Manoj Kumar</td>
                        <td>KA-19-AB-1234</td>
                        <td style="color: #ff3366; font-weight: bold;">3</td>
                        <td>Today, 15:20</td>
                        <td>Speed (Non-Plant)</td>
                        <td style="color: #ffaa00;">Written Warning</td>
                        <td>Supervisor notified, counseling scheduled</td>
                        <td style="color: #00d4ff;">Speed Radar</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366; font-weight: 600;">Ravi Sharma</td>
                        <td>KA-19-EF-9012</td>
                        <td style="color: #ff3366; font-weight: bold;">3</td>
                        <td>Today, 12:45</td>
                        <td>Speed (Non-Plant)</td>
                        <td style="color: #ffaa00;">Written Warning</td>
                        <td>Safety training recommended</td>
                        <td style="color: #00d4ff;">ANPR + Radar</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td style="color: #ff3366; font-weight: 600;">Vijay Singh</td>
                        <td>KA-19-CD-8765</td>
                        <td style="color: #ff3366; font-weight: bold;">3</td>
                        <td>Today, 12:15</td>
                        <td>Speed (Plant)</td>
                        <td style="color: #ffaa00;">Written Warning</td>
                        <td>Department head informed</td>
                        <td style="color: #00d4ff;">ESRPMS</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                    <tr>
                        <td style="color: #ffaa00; font-weight: 600;">Arjun Mehta</td>
                        <td>KA-20-KL-1234</td>
                        <td style="color: #ffaa00; font-weight: bold;">2</td>
                        <td>Today, 09:40</td>
                        <td>Speed (Non-Plant)</td>
                        <td style="color: #00ff88;">Verbal Warning</td>
                        <td>First repeat offense, cautioned</td>
                        <td style="color: #00d4ff;">Speed Radar</td>
                        <td><span style="color: #00d4ff; cursor: pointer;"> View</span></td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255, 51, 102, 0.1); border-radius: 8px;">
                <h4 style="color: #ff3366; margin-bottom: 0.5rem;">Action Required</h4>
                <ul style="color: #8b9dc3; margin: 0; padding-left: 1.5rem;">
                    <li>5 drivers identified with repeat violations</li>
                    <li>Warning notices issued to all repeat offenders</li>
                    <li>Recommend driver training for top 3 offenders</li>
                    <li>Supervisor meetings scheduled for all cases</li>
                </ul>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// Parked Vehicles - Level 1: Show location cards
function showParkedVehicles() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Parked Vehicles - Select Location';
    
    // Parking location data with occupancy
    const parkingData = {
        'Main Gate P1': { total: 25, occupied: 6, type: 'Cars' },
        'Main Gate P2': { total: 30, occupied: 7, type: 'Cars' },
        'Main Gate P3': { total: 20, occupied: 5, type: 'Cars' },
        'E2 Gate': { total: 15, occupied: 6, type: 'Trucks' }
    };
    
    modalBody.innerHTML = `
        <div style="padding: 1rem;">
            <p style="color: #8b9dc3; margin-bottom: 1.5rem; font-size: 0.9rem;">Click on a parking location to view detailed vehicle information</p>
            
            <!-- Parking Location Cards -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                ${Object.entries(parkingData).map(([location, data]) => {
                    const occupancyPercent = Math.round((data.occupied / data.total) * 100);
                    const remaining = data.total - data.occupied;
                    const barColor = occupancyPercent > 90 ? '#ff3366' : occupancyPercent > 70 ? '#ffaa00' : '#00ff88';
                    
                    return `
                        <div onclick="showParkingDetails('${location}')" style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: all 0.3s; position: relative;" onmouseover="this.style.borderColor='#00d4ff'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(0, 212, 255, 0.3)'; this.style.transform='translateY(0)'">
                            <div style="font-size: 1.1rem; color: #00d4ff; font-weight: 600; margin-bottom: 0.5rem;">${location}</div>
                            <div style="font-size: 0.85rem; color: #8b9dc3; margin-bottom: 1rem;">${data.type} Parking</div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                                <div>
                                    <div style="font-size: 0.75rem; color: #8b9dc3;">Occupancy</div>
                                    <div style="font-size: 1.5rem; color: ${barColor}; font-weight: bold;">${data.occupied}/${data.total}</div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 0.75rem; color: #8b9dc3;">Available</div>
                                    <div style="font-size: 1.5rem; color: #00ff88; font-weight: bold;">${remaining}</div>
                                </div>
                            </div>
                            
                            <div style="background: rgba(255, 255, 255, 0.1); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 0.5rem;">
                                <div style="background: ${barColor}; height: 100%; width: ${occupancyPercent}%; transition: width 0.3s;"></div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.8rem; color: ${barColor}; font-weight: 600;">${occupancyPercent}% Full</span>
                                <span style="font-size: 0.75rem; color: #00d4ff;">Click to view details →</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <!-- Data Source Info -->
            <div style="margin-top: 2rem; padding: 1rem; background: rgba(0, 212, 255, 0.05); border-radius: 8px; border-left: 4px solid #00d4ff;">
                <div style="font-size: 0.85rem; color: #00d4ff; font-weight: 600; margin-bottom: 0.3rem;"> Data Source: ANPR System</div>
                <div style="font-size: 0.75rem; color: #8b9dc3;">Real-time vehicle tracking via Automatic Number Plate Recognition</div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Parked Vehicles - Level 2: Show detailed table for specific location
function showParkingDetails(location) {
    console.log('showParkingDetails called with location:', location);
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    console.log('Modal element:', modal);
    console.log('parkingVehiclesData:', parkingVehiclesData);
    
    modalTitle.textContent = `${location} - Parked Vehicles`;
    
    // Filter vehicles for this location
    const locationVehicles = parkingVehiclesData.filter(v => v.location === location);
    console.log('Filtered vehicles for', location, ':', locationVehicles);
    
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; height: 550px;">
            <!-- Back Button -->
            <div style="margin-bottom: 1rem;">
                <button onclick="showParkedVehicles()" style="background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid #00d4ff; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 212, 255, 0.3)'" onmouseout="this.style.background='rgba(0, 212, 255, 0.2)'">
                    ← Back to Locations
                </button>
            </div>
            
            <!-- Summary Info -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                <div style="background: rgba(0, 212, 255, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #00d4ff;">
                    <div style="font-size: 0.75rem; color: #8b9dc3; margin-bottom: 0.3rem;">Total Vehicles</div>
                    <div style="font-size: 1.5rem; color: #00d4ff; font-weight: bold;">${locationVehicles.length}</div>
                </div>
                <div style="background: rgba(0, 255, 136, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #00ff88;">
                    <div style="font-size: 0.75rem; color: #8b9dc3; margin-bottom: 0.3rem;">Vehicle Type</div>
                    <div style="font-size: 1.2rem; color: #00ff88; font-weight: bold;">${locationVehicles[0]?.type || 'N/A'}</div>
                </div>
                <div style="background: rgba(0, 212, 255, 0.1); padding: 0.8rem; border-radius: 8px; border-left: 4px solid #00d4ff;">
                    <div style="font-size: 0.75rem; color: #8b9dc3; margin-bottom: 0.3rem;">Data Source</div>
                    <div style="font-size: 1.2rem; color: #00d4ff; font-weight: bold;">ANPR</div>
                </div>
            </div>
            
            <!-- Vehicles Table -->
            <div style="flex: 1; overflow-y: auto; background: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 0.5rem;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="position: sticky; top: 0; background: #1e2746; z-index: 10;">
                        <tr>
                            <th style="padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; text-align: left;">Vehicle Number</th>
                            <th style="padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; text-align: left;">Type</th>
                            <th style="padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; text-align: left;">Entry Time</th>
                            <th style="padding: 0.8rem; color: #00d4ff; border-bottom: 2px solid #3d4a7a; font-size: 0.85rem; text-align: left;">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${locationVehicles.length > 0 ? locationVehicles.map((v, idx) => {
                            const bgColor = idx % 2 === 0 ? 'rgba(0, 212, 255, 0.05)' : 'transparent';
                            
                            return `
                                <tr style="background: ${bgColor}; border-bottom: 1px solid #3d4a7a;">
                                    <td style="padding: 0.8rem; color: #fff; font-size: 0.9rem; font-weight: 600;">${v.vehicle}</td>
                                    <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.9rem;">${v.type}</td>
                                    <td style="padding: 0.8rem; color: #00ff88; font-size: 0.9rem;">${v.entryTime}</td>
                                    <td style="padding: 0.8rem; color: #8b9dc3; font-size: 0.9rem;">${v.duration}</td>
                                </tr>
                            `;
                        }).join('') : `
                            <tr>
                                <td colspan="4" style="padding: 2rem; text-align: center; color: #8b9dc3;">No vehicles found for this location</td>
                            </tr>
                        `}
                    </tbody>
                </table>
            </div>
            
            <!-- Download Report Button -->
            <div style="margin-top: 1rem;">
                <button onclick="alert('${location} Parking Report downloaded successfully!')" style="width: 100%; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: all 0.3s;">
                     Download ${location} Report
                </button>
            </div>
        </div>
    `;
    
    console.log('Modal display before:', modal.style.display);
    modal.style.display = 'block';
    console.log('Modal display after:', modal.style.display);
}

// Incident Trend Report Functions
function showIncidentTrendReportOptions() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = '30-Day Incident Trend - Download Report';
    modalBody.innerHTML = `
        <div style="padding: 1rem;">
            <p style="color: #8b9dc3; margin-bottom: 1.5rem;">Select a date range to download the incident trend report</p>
            
            <div style="display: grid; gap: 1rem;">
                <button onclick="downloadIncidentTrendReport('last7days')" style="background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.3s;">
                    Last 7 Days
                </button>
                
                <button onclick="downloadIncidentTrendReport('last30days')" style="background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.3s;">
                    Last 30 Days
                </button>
                
                <button onclick="downloadIncidentTrendReport('thismonth')" style="background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.3s;">
                    This Month
                </button>
                
                <button onclick="showIncidentTrendCustomDateRange()" style="background: linear-gradient(135deg, #ffaa00 0%, #ff8800 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.3s;">
                    Custom Date Range
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function showIncidentTrendCustomDateRange() {
    const modal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'Custom Date Range - Incident Trend Report';
    modalBody.innerHTML = `
        <div style="padding: 1rem;">
            <p style="color: #8b9dc3; margin-bottom: 1.5rem;">Select custom date range for the report</p>
            
            <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                <div>
                    <label style="color: #00d4ff; display: block; margin-bottom: 0.5rem;">From Date:</label>
                    <input type="date" id="customStartDate" style="width: 100%; padding: 0.7rem; background: #1e2746; border: 2px solid #3d4a7a; border-radius: 8px; color: #e0e0e0; font-size: 1rem;">
                </div>
                
                <div>
                    <label style="color: #00d4ff; display: block; margin-bottom: 0.5rem;">To Date:</label>
                    <input type="date" id="customEndDate" style="width: 100%; padding: 0.7rem; background: #1e2746; border: 2px solid #3d4a7a; border-radius: 8px; color: #e0e0e0; font-size: 1rem;">
                </div>
            </div>
            
            <button onclick="downloadIncidentTrendReport('custom')" style="width: 100%; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 500;">
                Download Report
            </button>
        </div>
    `;
    modal.style.display = 'block';
}

function downloadIncidentTrendReport(period) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let startDate, endDate, title;
    const today = new Date();
    
    if (period === 'last7days') {
        endDate = new Date(today);
        startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 7);
        title = 'Last 7 Days Incident Trend Report';
    } else if (period === 'last30days') {
        endDate = new Date(today);
        startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 30);
        title = 'Last 30 Days Incident Trend Report';
    } else if (period === 'thismonth') {
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today);
        title = 'This Month Incident Trend Report';
    } else if (period === 'custom') {
        const startInput = document.getElementById('customStartDate').value;
        const endInput = document.getElementById('customEndDate').value;
        
        if (!startInput || !endInput) {
            alert('Please select both start and end dates');
            return;
        }
        
        startDate = new Date(startInput);
        endDate = new Date(endInput);
        title = 'Custom Date Range Incident Trend Report';
    }
    
    // Generate sample data
    const incidentData = [];
    let currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
        const dateStr = currentDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
        const total = Math.floor(Math.random() * 8) + 4; // 4-12 incidents
        const speed = Math.floor(total * 0.3);
        const unauth = Math.floor(total * 0.2);
        const helmet = Math.floor(total * 0.15);
        const ppe = Math.floor(total * 0.15);
        const tail = Math.floor(total * 0.1);
        const badge = Math.floor(total * 0.05);
        const vehicle = total - (speed + unauth + helmet + ppe + tail + badge);
        
        incidentData.push({
            date: dateStr,
            total: total,
            speed: speed,
            unauth: unauth,
            helmet: helmet,
            ppe: ppe,
            tail: tail,
            badge: badge,
            vehicle: vehicle
        });
        
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // PDF Header
    doc.setFillColor(30, 39, 70);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('MRPL - Security Dashboard', 105, 15, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(title, 105, 25, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(139, 157, 195);
    doc.text(`Generated: ${new Date().toLocaleString('en-IN')}`, 105, 33, { align: 'center' });
    
    // Daily Incident Summary Table
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Daily Incident Summary', 14, 50);
    
    doc.autoTable({
        startY: 55,
        head: [['Date', 'Total', 'Incident Breakdown']],
        body: incidentData.map(d => [
            d.date,
            d.total,
            `Speed: ${d.speed}, Unauth: ${d.unauth}, Helmet: ${d.helmet}, PPE: ${d.ppe}, Tail: ${d.tail}, Badge: ${d.badge}, Vehicle: ${d.vehicle}`
        ]),
        theme: 'grid',
        headStyles: {
            fillColor: [0, 212, 255],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 9,
            cellPadding: 3
        },
        columnStyles: {
            0: { cellWidth: 30 },
            1: { cellWidth: 20, halign: 'center' },
            2: { cellWidth: 'auto' }
        }
    });
    
    let finalY = doc.lastAutoTable.finalY + 10;
    
    // Incident Type Summary
    const totalIncidents = incidentData.reduce((sum, d) => sum + d.total, 0);
    const totalSpeed = incidentData.reduce((sum, d) => sum + d.speed, 0);
    const totalUnauth = incidentData.reduce((sum, d) => sum + d.unauth, 0);
    const totalHelmet = incidentData.reduce((sum, d) => sum + d.helmet, 0);
    const totalPPE = incidentData.reduce((sum, d) => sum + d.ppe, 0);
    const totalTail = incidentData.reduce((sum, d) => sum + d.tail, 0);
    const totalBadge = incidentData.reduce((sum, d) => sum + d.badge, 0);
    const totalVehicle = incidentData.reduce((sum, d) => sum + d.vehicle, 0);
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Incident Type Summary', 14, finalY);
    
    doc.autoTable({
        startY: finalY + 5,
        head: [['Incident Type', 'Count', 'Percentage']],
        body: [
            ['Speed Violations', totalSpeed, `${((totalSpeed/totalIncidents)*100).toFixed(1)}%`],
            ['Unauthorized Access', totalUnauth, `${((totalUnauth/totalIncidents)*100).toFixed(1)}%`],
            ['Helmet Violations', totalHelmet, `${((totalHelmet/totalIncidents)*100).toFixed(1)}%`],
            ['PPE Violations', totalPPE, `${((totalPPE/totalIncidents)*100).toFixed(1)}%`],
            ['Tailgating', totalTail, `${((totalTail/totalIncidents)*100).toFixed(1)}%`],
            ['Badge Issues', totalBadge, `${((totalBadge/totalIncidents)*100).toFixed(1)}%`],
            ['Vehicle Issues', totalVehicle, `${((totalVehicle/totalIncidents)*100).toFixed(1)}%`]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [0, 212, 255],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 10,
            cellPadding: 4
        }
    });
    
    finalY = doc.lastAutoTable.finalY + 10;
    
    // Key Insights
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Key Insights', 14, finalY);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`• Total Incidents: ${totalIncidents}`, 14, finalY + 8);
    doc.text(`• Average per Day: ${(totalIncidents / incidentData.length).toFixed(1)}`, 14, finalY + 15);
    doc.text(`• Most Common: Speed Violations (${((totalSpeed/totalIncidents)*100).toFixed(1)}%)`, 14, finalY + 22);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(139, 157, 195);
    doc.text('MRPL - Integrated Security Command & Control System', 105, 285, { align: 'center' });
    
    // Save PDF
    const filename = `MRPL_Incident_Trend_${period}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
    
    closeDeviceModal();
}


// Debug: Verify functions are loaded
console.log('=== VEHICLE MONITORING FUNCTIONS LOADED ===');
console.log('showSpeedViolations:', typeof showSpeedViolations);
console.log('showTankerMovement:', typeof showTankerMovement);
console.log('showRepeatOffenders:', typeof showRepeatOffenders);
console.log('showExpiredBadgeAttempts:', typeof showExpiredBadgeAttempts);

// Image Viewer Functions
function showImage(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalTitle');
    
    modalImage.src = imagePath;
    modalTitle.textContent = 'Evidence Image';
    modal.style.display = 'block';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const imageModal = document.getElementById('imageModal');
    if (event.target === imageModal) {
        closeImageModal();
    }
}


function showLoginInfo() {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalBody = modal.querySelector('.modal-body');
    
    modalTitle.textContent = 'Role-Based Access Control System';
    
    modalBody.innerHTML = `
        <div style="padding: 20px; color: #e0e0e0; text-align: left;">
            <div style="background: rgba(102, 126, 234, 0.1); border-left: 4px solid #667eea; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #667eea; margin: 0 0 10px 0; font-size: 1.1rem;"> Secure Dashboard Access</h3>
                <p style="margin: 0; color: #8b9dc3; font-size: 0.9rem;">This dashboard implements role-based access control to ensure data security and appropriate information visibility.</p>
            </div>
            
            
        </div>
    `;
    
    modal.style.display = 'block';
}
